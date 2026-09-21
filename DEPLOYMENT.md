# GitHub Pages Deployment Guide

This guide explains how to deploy your Next.js portfolio to GitHub Pages.

## Understanding the Build Process

Your site is built with **Next.js**, which uses `.tsx` files (TypeScript + React components) as **source code**. These files are NOT what gets uploaded to GitHub Pages.

### What Happens During Build:
1. Your `.tsx` source files are **compiled** into regular HTML, CSS, and JavaScript
2. All these files are placed in an `out` folder
3. The `out` folder contains traditional web files that browsers can read directly

## Deployment Steps

### Step 1: Build Your Site

In your terminal, run:
```bash
npm run build
```

This creates the `out` folder with all your website files:
- `index.html` - Your home page
- `guitar-shop.html` - Guitar shop page
- `projects.html` - Projects page
- `photography.html` - Photography page
- `resume.html` - Resume page
- `contact.html` - Contact page
- Plus all CSS, JavaScript, and asset files

### Step 2: Set Up GitHub Pages

#### Option A: Using GitHub Actions (Recommended - Automatic)

1. Go to your GitHub repository settings
2. Click on "Pages" in the left sidebar
3. Under "Build and deployment", select "GitHub Actions"
4. Create `.github/workflows/deploy.yml` in your repository with this content:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

5. Commit and push this file
6. Your site will automatically deploy when you push to main!

#### Option B: Manual Deployment

1. Build your site locally:
```bash
npm run build
```

2. The `out` folder now contains your complete website

3. Create a `gh-pages` branch:
```bash
git checkout --orphan gh-pages
```

4. Remove all files and add only the `out` folder contents:
```bash
git rm -rf .
cp -r out/* .
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages
```

5. Go to your repository settings → Pages
6. Select `gh-pages` branch as the source

### Step 3: Access Your Site

Your site will be available at:
- If you have a custom domain: `https://yourdomain.com`
- Otherwise: `https://yourusername.github.io/repository-name`

## Updating Your Site

### With GitHub Actions:
Just push changes to main branch - automatic deployment!

### Manual Method:
1. Make your changes
2. Run `npm run build`
3. Copy contents of `out` folder to `gh-pages` branch
4. Commit and push

## Custom Domain Setup (Optional)

1. Buy a domain (e.g., carson.com, isaaccarson.com)
2. In your repository root, create a file named `CNAME` containing your domain
3. Configure DNS settings at your domain registrar:
   - Add A records pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to `yourusername.github.io`

## Troubleshooting

**Site shows 404 errors:**
- Make sure the `out` folder was generated (run `npm run build`)
- Check that GitHub Pages is enabled in settings
- Verify the correct branch is selected

**Styles/images not loading:**
- Check that `basePath` in `next.config.ts` matches your repository name
- Make sure all assets are in the `public` folder

**Build fails:**
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors with `npm run build`

## File Types Explained

- `.tsx` files → Source code (TypeScript + React)
- `.ts` files → Configuration files (TypeScript)
- `.html` files → Generated HTML (in `out` folder after build)
- `.js` files → Generated JavaScript (in `out` folder after build)
- `.css` files → Styles

**You edit `.tsx` files → Build creates `.html` files → Deploy `.html` files to GitHub Pages**

## Need Help?

1. Check the GitHub Pages documentation: https://docs.github.com/pages
2. Make sure Node.js is installed: `node --version`
3. Verify npm is working: `npm --version`
4. Check build output for errors: `npm run build`
