# ✨ Features Guide

## 🎯 Purpose & Scope

DevTunnel-CLI is a development tool designed for:

- **Development & Testing**: Share local work with teammates
- **Mobile Testing**: Test apps on real devices without deployment
- **Client Demos**: Show work-in-progress features instantly
- **Webhook Debugging**: Test third-party webhooks on localhost

---

## Core Features

### 🤖 Fully Automatic Setup

- Auto-installs Cloudflare (if not present)
- Auto-installs npm dependencies
- Auto-detects dev server and port
- **Supports multiple ports** — auto-detects or choose (3000, 8000, 5500, 80, etc.)
- Zero manual configuration

### 🔗 Smart Proxy System

**Problem:** Vite/React blocks requests from unknown hosts

**Solution:** DevTunnel creates a proxy server that:

- Sits between tunnel and your dev server
- Forwards all requests transparently
- Handles WebSocket for HMR (Hot Module Reload)
- Enables CORS automatically
- **No config changes needed!**

**How it works:**

```
Internet → Cloudflare Tunnel → Proxy → Your Dev Server
          (Port 4000)          (Port 3000)
```

### 🌍 Cross-Platform Support

**Windows:**

- Modern folder picker (Windows 11 style)
- `winget` auto-installation

**macOS:**

- Native folder dialog
- Shell script launchers
- Homebrew compatible

**Linux:**

- Zenity/KDialog dialogs
- Shell script launchers
- Works on all major distros

### 🚀 Multi-Tunnel Fallback

Automatically tries services in order:

1. **Cloudflare** (Best)
   - Fastest
   - Most reliable
   - No password page
   - ⭐ **Recommended**

2. **Ngrok** (Good)
   - Fast and popular
   - Requires account for persistent URLs

3. **LocalTunnel** (Fallback)
   - Always available (built-in)
   - Shows password page on first visit
   - Uses your public IP as password

### ⚡ Instant Public URLs

Get shareable URLs instantly:

Output:

```
╔═══════════════════════════════════════════════════╗
║ ✅ PUBLIC URL                                    ║
╠═══════════════════════════════════════════════════╣
║ https://your-app.serviceprovider.com           ║
╠═══════════════════════════════════════════════════╣
║ 💡 Share this URL with anyone!                  ║
╚═══════════════════════════════════════════════════╝
```

**Benefits:**

- No configuration needed
- Works immediately
- Share with anyone
- No login required

### 📊 Organized Logging

- Logs saved to `logs/` folder
- Timestamped log files
- Easy to debug issues
- Clean console output

### 🎯 Framework Agnostic

Works with ANY framework and backend:

- ✅ **Frontend:** Vite, React, Vue, Next.js, Angular, Svelte
- ✅ **Backend:** Express, NestJS, Fastify, Koa, Hapi
- ✅ **Python:** FastAPI, Flask, Django, Tornado
- ✅ **Java:** Spring Boot, Tomcat, Jetty
- ✅ **PHP:** Laravel, Symfony, WordPress
- ✅ **Go:** Gin, Echo, Fiber
- ✅ **Ruby:** Rails, Sinatra
- ✅ **Rust:** Actix, Rocket
- ✅ **Any HTTP/HTTPS server on any port!**
- ✅ **REST APIs, GraphQL APIs, WebSocket servers**
- ✅ **Microservices, monoliths, serverless functions**

---

## Advanced Features

### Multiple Projects

Run multiple instances simultaneously:

**Terminal 1:**

```bash
npm start
# Select Backend (Port 3000)
```

**Terminal 2:**

```bash
npm start
# Select Frontend (Port 5173)
```

Each gets its own public URL!

### Port Auto-Detection

- You enter your dev server port (e.g., 3000)
- Proxy automatically uses port + 1000 (e.g., 4000)
- No conflicts!

### WebSocket Support

Full WebSocket proxying for:

- Vite HMR (Hot Module Reload)
- Socket.io
- Real-time features
- Live updates

### File Streaming Support

DevTunnel supports streaming large files:

- ✅ Video files (MP4, WebM, etc.)
- ✅ Audio files
- ✅ Large downloads
- ✅ Progressive loading

### CORS Handling

Automatic CORS headers:

```javascript
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: *
Access-Control-Allow-Headers: *
```

Works with any frontend!

### Error Recovery

- Graceful error handling
- Clear error messages
- Auto-retry logic
- Fallback mechanisms

---

## Coming Soon 🚧

- [ ] Persistent custom URLs (named tunnels)
- [ ] Dashboard UI
- [ ] Traffic analytics
- [ ] Request logging
- [ ] Multiple tunnels management
- [ ] Webhook support
- [ ] API for programmatic use

---

## Performance

**Benchmarks:**

| Metric | Value |
|--------|-------|
| Startup time | ~3 seconds |
| Request latency | +50-100ms (tunnel overhead) |
| Throughput | ~100 req/sec |
| Max connections | Limited by Cloudflare |

**Tips for best performance:**

1. Use Cloudflare (fastest tunnel)
2. Keep dev server and tunnel on same machine
3. Use wired connection over WiFi
4. Close unnecessary apps

---

## Access & Sharing

DevTunnel-CLI is built for fast, frictionless sharing during development.

### How It Works

- Get a public URL instantly with one command
- Share with teammates, clients, or test on any device
- Zero configuration — no account or setup required
- URLs are created per session and regenerated each run

### Why Developers Love It

- **Instant sharing**: One command, share anywhere
- **Zero config**: Works with any project immediately
- **Perfect for**: Development, demos, webhook testing, mobile testing, team collaboration

---

**Enjoy all these features! 🚀**
