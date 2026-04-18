export function isValidPort(value) {
    const n = Number.parseInt(String(value), 10);
    return Number.isInteger(n) && n >= 1 && n <= 65535;
}

export function normalizePort(value) {
    if (value == null || value === "") return null;
    const n = Number.parseInt(String(value).trim(), 10);
    return isValidPort(n) ? n : null;
}

export function parsePortFromArgs(argv = []) {
    for (let i = 0; i < argv.length; i += 1) {
        const arg = argv[i];
        if (arg === "--port" || arg === "-p") {
            return normalizePort(argv[i + 1]);
        }
        if (arg.startsWith("--port=")) {
            return normalizePort(arg.slice("--port=".length));
        }
        if (arg.startsWith("-p=")) {
            return normalizePort(arg.slice("-p=".length));
        }
    }
    return null;
}

export function getFrameworkFromScript(script = "") {
    const s = script.toLowerCase();
    if (s.includes("vite")) return "vite";
    if (s.includes("next")) return "next";
    if (s.includes("react-scripts")) return "react-scripts";
    if (s.includes("webpack")) return "webpack";
    if (s.includes("nuxt")) return "nuxt";
    if (s.includes("svelte")) return "svelte";
    if (s.includes("quasar")) return "quasar";
    if (s.includes("express")) return "express";
    return "unknown";
}

export function getPortHintFromScript(script = "", viteConfigPort = null) {
    const framework = getFrameworkFromScript(script);

    const explicitPort = script.match(/(?:--port(?:[\s=]+))(\d+)/i);
    if (explicitPort && isValidPort(explicitPort[1])) {
        return { port: Number.parseInt(explicitPort[1], 10), source: "script-explicit", framework };
    }

    const envPort = script.match(/(?:^|\s)(?:PORT|port)\s*=\s*(\d+)/i);
    if (envPort && isValidPort(envPort[1])) {
        return { port: Number.parseInt(envPort[1], 10), source: "script-env", framework };
    }

    if (viteConfigPort && isValidPort(viteConfigPort)) {
        return { port: viteConfigPort, source: "vite-config", framework };
    }

    if (framework === "vite") return { port: 5173, source: "framework-default", framework };
    if (framework === "next") return { port: 3000, source: "framework-default", framework };
    if (framework === "react-scripts") return { port: 3000, source: "framework-default", framework };
    if (framework === "webpack") return { port: 8080, source: "framework-default", framework };
    if (framework === "express") return { port: 3000, source: "framework-default", framework };

    return { port: null, source: "unknown", framework };
}

function scorePort(port, context) {
    let score = 0;
    const { framework, hintedPort, source } = context;

    if (framework === "vite" || framework === "svelte" || framework === "quasar") {
        if (port >= 5173 && port <= 5200) score += 100;
    }

    if (framework === "next" || framework === "react-scripts" || framework === "express") {
        if (port >= 3000 && port <= 3015) score += 100;
    }

    if (framework === "webpack" && port >= 8080 && port <= 8095) {
        score += 100;
    }

    if (hintedPort && source !== "framework-default" && port === hintedPort) {
        score += 200;
    }

    if ((framework === "vite" || framework === "svelte" || framework === "quasar") && source === "framework-default") {
        // If auto-increment happened (5173 busy -> 5174+), prefer newer higher ports.
        score += Math.min(port, 5200) / 10;
    }

    const isAutoIncrementCase =
        (framework === "vite" || framework === "svelte" || framework === "quasar") && source === "framework-default";

    if (hintedPort && port === hintedPort && !isAutoIncrementCase) {
        score += 20;
    }

    return score;
}

export function prioritizePorts(ports = [], context = {}) {
    const unique = [...new Set(ports.filter((p) => isValidPort(p)))];
    return unique
        .map((port) => ({ port, score: scorePort(port, context) }))
        .sort((a, b) => (b.score - a.score) || (b.port - a.port))
        .map((x) => x.port);
}

export function buildCandidatePorts(hintedPort = null) {
    const pool = [
        hintedPort,
        ...Array.from({ length: 30 }, (_, i) => 5173 + i),
        ...Array.from({ length: 25 }, (_, i) => 3000 + i),
        80,
        443,
        5500,
        8000,
        8080,
        4000,
        5000
    ];
    return [...new Set(pool.filter((p) => isValidPort(p)))];
}
