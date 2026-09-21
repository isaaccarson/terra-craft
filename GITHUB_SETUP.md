# Deploy Portfolio to GitHub

## Step 1: Create a GitHub Repository

1. Go to https://github.com/new
2. Repository name: `terra-craft` (or `portfolio` or any name you like)
3. **Keep it Public** (required for free GitHub Pages)
4. **Do NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

## Step 2: Add GitHub as a Remote

After creating the repo, GitHub will show you commands. Use these:

```bash
# Navigate to your local repository
cd terra-craft

# Add GitHub as a remote (replace YOUR_USERNAME with your GitHub username)
git remote add github https://github.com/YOUR_USERNAME/terra-craft.git

# Push to GitHub
git push -u github main
```

## Step 3: Enable GitHub Pages

1. Go to your new GitHub repository
2. Click **Settings**
3. Scroll down to **Pages** (in the left sidebar)
4. Under "Build and deployment":
   - Source: **GitHub Actions**
5. The workflow will run automatically!

## Your Repository Locations

After this setup, you'll have:
- **Origin**: https://cursor.com/codebase/isaac-carson/terra-craft (Cursor's hosting)
- **GitHub**: https://github.com/YOUR_USERNAME/terra-craft (for GitHub Pages)

Both are synced - you can push to either one!

---

## Alternative: Skip GitHub Pages Entirely

If this seems complicated, I can help you deploy to **Netlify** or **Vercel** instead:
- ✅ Works directly with Origin
- ✅ Free hosting
- ✅ Automatic deployments
- ✅ Custom domains
- ✅ Often faster than GitHub Pages

Would you prefer to use Netlify/Vercel instead?
