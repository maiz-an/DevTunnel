# npm Support Request: Package Name Approval

## Request Details

**Package Name Requested:** `devtunnel`  
**Current Package Name:** `devtunnel-cli`  
**npm Username:** maiz-an  
**Repository:** https://github.com/maiz-an/DevTunnel

---

## Request Message

Subject: Request to publish package name "devtunnel" (different from "dev-tunnel")

Hello npm Support Team,

I would like to request approval to publish a package under the name `devtunnel` (no hyphen).

**Current Situation:**
- I currently publish as `devtunnel-cli` (https://www.npmjs.com/package/devtunnel-cli)
- When attempting to publish as `devtunnel`, I received error: "Package name too similar to existing package dev-tunnel"
- The existing package is `dev-tunnel` (with hyphen), which is different from `devtunnel` (no hyphen)

**Why the names are different:**
1. **Different spelling:** `dev-tunnel` uses a hyphen, `devtunnel` is a single word
2. **Different purpose:** 
   - `dev-tunnel` appears to be a different tool/service
   - `devtunnel` is a CLI tool for sharing local development servers
3. **Different branding:** These are distinct products with different names

**Package Information:**
- **Name:** devtunnel
- **Description:** DevTunnel - Share local dev servers worldwide. Zero configuration tunnel for any framework.
- **Repository:** https://github.com/maiz-an/DevTunnel
- **Website:** https://devtunnel.vercel.app
- **License:** MIT
- **Current version:** 3.0.14

**Why this name:**
- The tool is called "DevTunnel" (one word, no hyphen)
- Users expect to install it as `npm install -g devtunnel` (simpler than `devtunnel-cli`)
- The command is `devtunnel` (already set in package.json bin field)
- It's a more intuitive and user-friendly package name

**Proposed Solution:**
- Keep `devtunnel-cli` as deprecated package pointing to `devtunnel`
- Publish new package as `devtunnel` once approved
- This provides better user experience with shorter installation command

Thank you for considering this request. I'm happy to provide any additional information needed.

Best regards,  
maiz-an

---

## How to Submit

1. Go to: https://www.npmjs.com/support
2. Select "Package name dispute" or "General inquiry"
3. Copy the message above
4. Submit the request

## Alternative: Email Support

Email: support@npmjs.com  
Subject: Request to publish package name "devtunnel"

---

## Status

- [ ] Request submitted to npm support
- [ ] Response received
- [ ] Package name approved/rejected
- [ ] If approved: Update package.json and publish
- [ ] If rejected: Consider alternative options
