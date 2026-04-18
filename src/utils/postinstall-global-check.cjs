#!/usr/bin/env node
'use strict';

// Postinstall must never fail install/publish. Keep this script tiny and non-blocking.
try {
  const path = require('path');

  const safeWarn = (msg) => {
    try {
      console.warn(msg);
    } catch (_) {
      // Never let logging break installation.
    }
  };

  const normalize = (p) => {
    try {
      return path.resolve(String(p || '')).toLowerCase();
    } catch (_) {
      return '';
    }
  };

  // Fast signals first: npm sets this for global installs.
  const npmGlobalFlag = String(process.env.npm_config_global || '').toLowerCase() === 'true';

  // Lightweight path-based fallback detection.
  const scriptDir = normalize(__dirname);
  const inNodeModules = scriptDir.includes(`${path.sep}node_modules${path.sep}`) || scriptDir.endsWith(`${path.sep}node_modules`);

  const npmPrefix = process.env.npm_config_prefix
    || (process.platform === 'win32'
      ? path.join(process.env.APPDATA || '', 'npm')
      : '/usr/local');

  const globalNodeModules = normalize(path.join(npmPrefix, 'node_modules'));
  const underGlobalNodeModules = !!globalNodeModules && scriptDir.startsWith(globalNodeModules);

  const isGlobalInstall = npmGlobalFlag || (inNodeModules && underGlobalNodeModules);

  if (isGlobalInstall) {
    // Global install: lightweight success path, no heavy operations.
    process.exitCode = 0;
  } else if (inNodeModules) {
    // Local install: allow normal behavior and only show a minimal warning.
    safeWarn('WARN: devtunnel-cli is typically used as a global CLI. Recommended: npm i -g devtunnel-cli');
    process.exitCode = 0;
  }
} catch (_) {
  // Silently ignore all failures to avoid blocking npm install/publish.
  process.exitCode = 0;
}
