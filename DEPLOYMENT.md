# Ridge & Rev – Motorcycle Travel India
## Local Running & Vercel Deployment Guide

This project is a modern, responsive React + TypeScript + Vite web application optimized for ultra-fast performance, SEO compliance, and mobile/desktop responsiveness.

---

### 1. Running Locally

#### Prerequisites
- Node.js 18+ or 20+
- npm, yarn, pnpm, or bun

#### Quickstart
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open browser at http://localhost:3000
```

#### Production Build Test Locally
```bash
# Build the production bundle into /dist
npm run build

# Preview the production bundle locally
npm run preview
```

---

### 2. Deploying to Vercel

You can deploy this website to Vercel in less than 2 minutes using either the **Vercel Web Dashboard (GitHub integration)** or the **Vercel CLI**.

#### Option A: Deploy via GitHub (Recommended)
1. Push your repository to GitHub / GitLab / Bitbucket.
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import your repository:
   - **Framework Preset**: Vite
   - **Root Directory**: `./`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
4. Click **Deploy**. Vercel will build and deploy the app with global CDN distribution and SSL certificate automatically provisioned.

#### Option B: Deploy via Vercel CLI
```bash
# 1. Install Vercel CLI globally
npm i -g vercel

# 2. Log in to your Vercel account
vercel login

# 3. Deploy preview
vercel

# 4. Deploy to production
vercel --prod
```

---

### 3. Key Configuration Files Provided

- **`vercel.json`**:
  - Configures the SPA single-page routing rewrites so deep links and reload work without 404s.
  - Adds aggressive caching headers for static assets (`Cache-Control: public, max-age=31536000, immutable`).
- **`public/robots.txt`**: Instructs Googlebot and search spiders on allowed routes and references the sitemap.
- **`public/sitemap.xml`**: Pre-configured XML sitemap listing canonical homepage and all 10 expedition route pages.
- **`index.html`**: Structured metadata, OpenGraph cards, Twitter cards, and Schema.org JSON-LD structured data.

---

### 4. SEO & Verification Checklist

- [x] Unique `<title>` for home and dynamic titles for each of the 10 blog posts.
- [x] Canonical links and meta descriptions on all routes.
- [x] Schema.org `WebSite` and dynamic `BlogPosting` JSON-LD structured data.
- [x] Semantic heading hierarchy (`<h1>`, `<h2>`, `<h3>`).
- [x] Zero broken images with descriptive `alt` tags and styled fallback graphics.
- [x] Fast Core Web Vitals with lazy-loaded imagery and zero heavy render-blocking scripts.
