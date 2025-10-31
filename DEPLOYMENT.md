# 🚀 Portfolio Deployment Guide

This guide explains how to deploy your portfolio to various hosting platforms.

## 📁 Deployment Files

The `/docs` folder contains the production-ready static HTML portfolio that can be deployed immediately to any hosting service.

---

## 🌐 GitHub Pages Deployment (Recommended)

### Automatic Deployment

The repository includes a GitHub Actions workflow that automatically deploys to GitHub Pages.

#### Steps:

1. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**
   - Save the settings

2. **Push your changes:**
   ```bash
   git push origin main
   ```

3. **Access your portfolio:**
   - Your portfolio will be available at: `https://akashmanda854.github.io/My-Portfolio/`
   - The deployment typically takes 2-3 minutes

#### Manual Deployment (Alternative)

If you prefer manual deployment:

1. Go to **Settings** → **Pages**
2. Under "Source", select **Deploy from a branch**
3. Select branch: `main` or `master`
4. Select folder: `/docs`
5. Click **Save**

---

## 📦 Other Hosting Options

### Netlify

1. **Drag & Drop:**
   - Go to [Netlify Drop](https://app.netlify.com/drop)
   - Drag the `/docs` folder
   - Get instant deployment URL

2. **Connect Git Repository:**
   - Login to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Build settings:
     - Base directory: `docs`
     - Build command: (leave empty)
     - Publish directory: `.` (current directory)
   - Click "Deploy site"

### Vercel

1. Login to [Vercel](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - Framework Preset: Other
   - Root Directory: `docs`
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
5. Click "Deploy"

### Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login and initialize:
   ```bash
   firebase login
   firebase init hosting
   ```

3. Configure:
   - Public directory: `docs`
   - Single-page app: No
   - GitHub deploys: Optional

4. Deploy:
   ```bash
   firebase deploy
   ```

### Surge.sh

1. Install Surge:
   ```bash
   npm install -g surge
   ```

2. Deploy:
   ```bash
   cd docs
   surge
   ```

3. Follow the prompts to choose a subdomain

---

## 🔧 Custom Domain Setup

### GitHub Pages

1. Add a `CNAME` file in the `/docs` folder:
   ```
   yourdomain.com
   ```

2. Configure DNS with your domain provider:
   - Add an A record pointing to GitHub's IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add a CNAME record pointing to: `akashmanda854.github.io`

3. Update in GitHub Settings → Pages → Custom domain

### Netlify/Vercel

Both platforms provide easy custom domain setup through their dashboards.

---

## ✅ Deployment Checklist

Before deploying, ensure:

- [x] All links work correctly
- [x] Social media links are updated
- [x] Images load properly
- [x] Dark mode toggle works
- [x] Responsive design works on mobile
- [x] Meta tags are properly configured
- [x] No console errors

---

## 🐛 Troubleshooting

### 404 Error

**Problem:** Getting 404 when accessing the deployed site.

**Solutions:**
1. **Check GitHub Pages settings:**
   - Ensure "Source" is set to "GitHub Actions" or the correct branch
   - Verify the `/docs` folder is selected if using branch deployment

2. **Check file paths:**
   - All CSS/JS paths in index.html should be relative
   - Example: `css/styles.css` not `/css/styles.css`

3. **Verify deployment:**
   - Go to "Actions" tab in your repository
   - Check if the deployment workflow ran successfully

4. **Clear cache:**
   - Clear browser cache or try in incognito mode
   - GitHub Pages can take 5-10 minutes for initial deployment

### CSS/JS Not Loading

**Problem:** Page loads but styles/functionality missing.

**Solutions:**
1. Check browser console for errors
2. Verify all file paths are relative, not absolute
3. Ensure all CSS/JS files are in the `/docs` folder
4. Check that files aren't blocked by .gitignore

### Images Not Showing

**Problem:** Images show broken or don't load.

**Solutions:**
1. Verify image paths are correct
2. Ensure images are in `/docs/site-previews/` folder
3. Check image file extensions match (case-sensitive on servers)

---

## 📊 Deployment Status

### Current Deployment

- **Platform:** GitHub Pages
- **URL:** https://akashmanda854.github.io/My-Portfolio/
- **Branch:** main
- **Folder:** /docs
- **Status:** ✅ Ready to deploy

### Alternative Versions

- **React Version:** Available in `/portfolio-react` (requires build step)
- **Angular Example:** Available in `/angular-example` (requires Angular CLI)

---

## 🔗 Useful Links

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Firebase Hosting Guide](https://firebase.google.com/docs/hosting)

---

## 💬 Support

If you encounter any issues:

1. Check the troubleshooting section above
2. Review the GitHub Actions logs (Actions tab)
3. Verify all files are committed and pushed
4. Open an issue in the repository

---

**Your portfolio is ready to deploy! 🎉**

Choose your preferred hosting platform and follow the steps above to go live.
