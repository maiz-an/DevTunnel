#!/usr/bin/env node
'use strict';
// Warn if installed locally (without -g). For security, devtunnel-cli should be installed globally.
const path = require('path');
try {
  const dir = __dirname; // e.g. .../node_modules/devtunnel-cli/src/utils
  const inNodeModules = dir.includes('node_modules');
  const npmPrefix = process.env.npm_config_prefix || (process.platform === 'win32' ? (process.env.APPDATA || '') + '\\npm' : '/usr/local');
  const globalNodeModules = path.join(npmPrefix, 'node_modules');
  const isGlobal = inNodeModules && (dir.startsWith(globalNodeModules) || path.resolve(dir).startsWith(path.resolve(globalNodeModules)));
  if (inNodeModules && !isGlobal) {
    console.error('\n  \x1b[33mWARN: devtunnel-cli should be installed globally to avoid vulnerabilities.\x1b[0m');
    console.error('  Run: \x1b[1mnpm i -g devtunnel-cli\x1b[0m\n');
  }
} catch (e) { /* ignore */ }
