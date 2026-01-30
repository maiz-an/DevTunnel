/**
 * Minimal static file server for HTML projects.
 * Used only when devtunnel detects an HTML project and no server is running.
 * Usage: node static-server.js <directory> <port>
 */
import http from "http";
import fs from "fs";
import path from "path";
const ROOT = path.resolve(process.argv[2] || ".");
const PORT = parseInt(process.argv[3] || "8080", 10);

const MIME = {
  ".html": "text/html",
  ".htm": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain",
};

const server = http.createServer((req, res) => {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
    return;
  }
  let p = path.join(ROOT, path.normalize(req.url).replace(/^\//, "") || ".");
  if (!path.isAbsolute(p)) p = path.join(ROOT, p);
  if (!p.startsWith(ROOT)) {
    res.writeHead(403, { "Content-Type": "text/plain" });
    res.end("Forbidden");
    return;
  }
  fs.stat(p, (err, stat) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
      return;
    }
    if (stat.isDirectory()) {
      p = path.join(p, "index.html");
      return fs.stat(p, (e2, s2) => {
        if (e2 || !s2.isFile()) {
          res.writeHead(404, { "Content-Type": "text/plain" });
          res.end("Not Found");
          return;
        }
        serveFile(p, s2, req, res);
      });
    }
    serveFile(p, stat, req, res);
  });
});

function serveFile(filePath, stat, req, res) {
  const ext = path.extname(filePath);
  const contentType = MIME[ext] || "application/octet-stream";
  res.setHeader("Content-Type", contentType);
  res.setHeader("Content-Length", stat.size);
  if (req.method === "HEAD") {
    res.end();
    return;
  }
  const stream = fs.createReadStream(filePath);
  stream.on("error", () => {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  });
  stream.pipe(res);
}

server.listen(PORT, "127.0.0.1", () => {
  // Server ready; no console output to avoid cluttering devtunnel output
});
server.on("error", (err) => {
  process.exit(1);
});
