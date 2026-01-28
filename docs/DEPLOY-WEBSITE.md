# 🌐 Deploy DevTunnel Website to GitHub Pages

## 🚀 Automatic Deployment (Recommended)

### Enable GitHub Pages

1. **Go to Repository Settings:**
   - Visit: https://github.com/maiz-an/DevTunnel/settings/pages

2. **Configure Source:**
   - Source: `GitHub Actions`

3. **Create Workflow File:**
   ```bash
   # Create .github/workflows directory in website branch
   git checkout website
   mkdir -p .github/workflows
   ```

4. **Add Workflow File:**
   Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [website]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          
      - name: Install dependencies
        run: |
          cd website
          npm ci
          
      - name: Build
        run: |
          cd website
          npm run build
          
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./website/out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. **Commit and Push:**
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Pages deployment workflow"
   git push
   ```

6. **Your Website Will Be Live At:**
   ```
   https://maiz-an.github.io/DevTunnel
   ```

---

## 🔧 Manual Build (Testing)

```bash
# Switch to website branch
git checkout website

# Navigate to website folder
cd website

# Install dependencies
npm install

# Build
npm run build

# Output will be in 'out' folder
```

---

## 💻 Local Development

```bash
git checkout website
cd website
npm install
npm run dev
```

Open: http://localhost:3000

---

## 🌐 Your Live Website

After deployment, your website will be available at:

**https://maiz-an.github.io/DevTunnel**

---

## 📝 Updating the Website

1. Switch to website branch:
   ```bash
   git checkout website
   ```

2. Edit `website/app/page.tsx`

3. Commit and push:
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```

4. GitHub Actions will automatically rebuild and deploy! ✨

---

## ✅ Deployment Checklist

- [ ] GitHub Pages enabled in repository settings
- [ ] Source set to "GitHub Actions"
- [ ] Workflow file created in `.github/workflows/deploy.yml`
- [ ] Website branch exists and is pushed
- [ ] First deployment triggered (automatic on push)
- [ ] Website live at: https://maiz-an.github.io/DevTunnel

---

**Your DevTunnel website will be live in 2-3 minutes after setup!** 🎉
