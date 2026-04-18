# Project Guidelines

## Code Style
- Use 2-space indentation and follow existing ESM patterns (`"type": "module"` in `package.json`).
- Keep functions focused and add brief comments only for non-obvious logic.
- Preserve cross-platform behavior (`win32`, `darwin`, `linux`) when touching OS-specific code paths.

## Architecture
- CLI entrypoint is `src/core/RUN.js`; primary orchestration is in `src/core/start.js`.
- Tunnel service orchestration and fallback logic are in `src/core/index.js`.
- Proxy behavior (including WebSocket/CORS handling) is in `src/core/proxy-server.js`.
- Cloudflared setup and binary resolution are in `src/core/setup-cloudflared.js`.
- Utilities are in `src/utils/` (folder picker, tunnel helpers, postinstall checks, static page assets).

## Build and Test
- Install dependencies: `npm install`
- Run locally: `npm start` (same behavior as `npm run dev` / `npm run run`)
- Run tunnel service directly: `npm run tunnel`
- Run checks before publish: `npm test`
- Keep release versioning in sync: `npm run sync-version`

## Conventions
- Prefer resilient fallback behavior over hard failures for tunnel and environment detection paths.
- Keep port-detection and proxy-port logic stable; avoid changing detection order unless required.
- If changing release version, keep all required files synchronized (CLI files and website repo process): see `docs/CONTRIBUTING.md`.
- Link to existing docs rather than re-documenting:
  - Setup and usage: `README.md`
  - Features and supported scenarios: `docs/FEATURES.md`
  - Contribution and release process: `docs/CONTRIBUTING.md`
  - Common failures and fixes: `docs/TROUBLESHOOTING.md`
