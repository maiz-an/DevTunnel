# 🚀 DevTunnel v3.0.0

**Release Date:** January 28, 2026

---

## 🎉 First Release!

DevTunnel is now available! Share your local dev servers worldwide with zero configuration.

---

## ✨ Features

### Core Features
- 🤖 **Fully Automatic** - Installs and configures everything automatically
- 🎯 **Zero Config** - No changes needed to your projects
- 🔗 **Smart Proxy** - Bypasses Vite/React/Next.js host restrictions
- 🌍 **Cross-Platform** - Windows, macOS, Linux

### Advanced Features
- 📝 **Custom Branding** - Add your name as creator
- 🚀 **Any Framework** - Vite, React, Next.js, Nest.js, Express, etc.
- 🔄 **Multi-Service** - Cloudflare → Ngrok → LocalTunnel fallback
- ⚡ **Fast Setup** - Running in seconds
- 🔌 **WebSocket Support** - HMR works perfectly

---

## 📦 Installation

### Quick Start

```bash
# Clone the repository
git clone https://github.com/maiz-an/DevTunnel.git
cd DevTunnel

# Install dependencies
npm install

# Run DevTunnel
npm start
```

### Platform-Specific Launchers

**Windows:**
```bash
START.bat
```

**macOS:**
```bash
chmod +x START.command
./START.command
```

**Linux:**
```bash
chmod +x START.sh
./START.sh
```

---

## 🎯 How to Use

1. **Start your dev server:**
   ```bash
   npm run dev
   ```

2. **Launch DevTunnel** (use any method above)

3. **Select your project folder** via the native file picker

4. **Enter your dev server port** (default: 5173)

5. **Get your public URL:**
   ```
   ╔══════════════════════════════════════════════════════════╗
   ║  ✅ PUBLIC URL                                           ║
   ╠══════════════════════════════════════════════════════════╣
   ║  https://abc-xyz.trycloudflare.com                      ║
   ╚══════════════════════════════════════════════════════════╝
   ```

6. **Share the URL worldwide!** 🌍

---

## 🎨 Custom Branding (Optional)

Add your name to URLs:

**Edit `src/config/config.js`:**
```javascript
export const YOUR_NAME = "Your Name";
```

**Result:**
```
╔══════════════════════════════════════════════════════════╗
║  ✅ PUBLIC URL (Created by: Your Name)                   ║
╠══════════════════════════════════════════════════════════╣
║  https://abc-xyz.trycloudflare.com                      ║
╠──────────────────────────────────────────────────────────╣
║  👤 Creator: Your Name                                    ║
║  💡 Share this URL with your team!                       ║
╚══════════════════════════════════════════════════════════╝
```

---

## 🛠️ Requirements

- **Node.js** 16+ (auto-installed on Windows via winget)
- **Internet connection**
- **Your dev server running**

---

## 💡 Use Cases

### Backend API Sharing
Perfect for sharing your backend API with frontend developers:

```javascript
// Your backend runs on localhost:3000
npm run dev

// Run DevTunnel
npm start

// Get: https://abc-xyz.trycloudflare.com
// Share with your team!
```

### Ideal For:
- ✅ Backend API sharing with frontend team
- ✅ Client demos and presentations
- ✅ Remote testing across networks
- ✅ Team collaboration on same backend
- ✅ Mobile device testing

---

## 🔧 Technical Details

### How It Works

1. **Smart Proxy** - Creates a reverse proxy that sits between the tunnel and your dev server
2. **Host Header Handling** - Automatically handles host headers for Vite/React/Next.js
3. **CORS Support** - Adds necessary CORS headers automatically
4. **WebSocket Proxying** - Full support for Hot Module Replacement (HMR)
5. **Auto-Fallback** - Tries multiple tunnel services until one works

### Architecture

```
Public Internet
       ↓
Cloudflare Tunnel (https://xyz.trycloudflare.com)
       ↓
DevTunnel Proxy Server (localhost:4000)
       ↓
Your Dev Server (localhost:3000)
```

### No Config Changes Needed!
Unlike other solutions, DevTunnel doesn't require you to modify:
- ❌ `vite.config.js`
- ❌ `next.config.js`
- ❌ `package.json`
- ❌ Any project files

---

## 📖 Documentation

Complete documentation available in the `docs/` folder:

- 📚 [Complete Guide](docs/README.md)
- 🚀 [Quick Start](docs/QUICK-START.md)
- ✨ [Features](docs/FEATURES.md)
- 🔧 [Troubleshooting](docs/TROUBLESHOOTING.md)
- 📋 [Changelog](docs/CHANGELOG.md)
- 🤝 [Contributing](docs/CONTRIBUTING.md)

---

## 🤝 Contributing

Contributions are welcome! See [CONTRIBUTING.md](docs/CONTRIBUTING.md) for guidelines.

---

## 📄 License

MIT License - see [LICENSE](docs/LICENSE) for details.

---

## 🙏 Credits

Built with:
- **Cloudflare Tunnel** - Fast, free tunneling
- **http-proxy** - Reverse proxy functionality
- **prompts** - Interactive CLI

---

## 🐛 Known Issues

None reported yet! If you find any, please [open an issue](https://github.com/maiz-an/DevTunnel/issues).

---

## 📊 Stats

- **Lines of Code:** ~1,500
- **Files:** 30
- **Dependencies:** 3
- **Supported Platforms:** Windows, macOS, Linux
- **Supported Frameworks:** All (Vite, React, Next.js, Nest.js, Express, etc.)

---

## 🚀 What's Next?

Future releases may include:
- Global npm package installation
- Custom domain support
- Authentication options
- Traffic analytics
- QR code generation for mobile testing

---

## ⭐ Star on GitHub

If you find DevTunnel useful, please star the repository!

**https://github.com/maiz-an/DevTunnel**

---

## 📱 Share

Help others discover DevTunnel:
- ⭐ Star the repository
- 🐦 Share on social media
- 📝 Write a blog post
- 💬 Tell your developer friends

---

**DevTunnel v3.0.0** - Share local dev servers worldwide!

Made with ❤️ for developers everywhere 🌍
