# URL Redirect Setup Summary

## What Was Done

### 1. Dataset Pages (1,442 files)
**Location**: `_posts/statistics/dataset/`

**Changes**:
- Changed permalink from `/dataset/:slug.html` to `/dataset/:slug/`
- Added `redirect_from: /dataset/{actual-slug}.html`

**Result**:
- Canonical URL: `/dataset/iris/`
- Redirects from: `/dataset/iris.html` → `/dataset/iris/`

### 2. Root-Level Pages (8 files)
**Files**: arithmetic.html, contact.html, datasets.html, statistics.html, technology.html, tableau.html, spirituality.html, real-analysis.html

**Changes**:
- Added `permalink: /{slug}/`
- Added `redirect_from: /{slug}.html`

**Result**:
- Canonical URL: `/real-analysis/`
- Redirects from: `/real-analysis.html` → `/real-analysis/`

### 3. CloudFront Function
**Function Name**: `remove-trailing-slash`
**Status**: Published to LIVE

**Function Behavior**:
1. **Redirects (301)**:
   - `/index.html` → `/`
   - `/dataset/iris/index.html` → `/dataset/iris/`
   - `/real-analysis.html` → `/real-analysis/`

2. **Internal Rewrites** (no visible redirect):
   - `/` → `/index.html`
   - `/dataset/iris` → `/dataset/iris/index.html`
   - `/dataset/iris/` → `/dataset/iris/index.html`
   - `/real-analysis` → `/real-analysis.html`
   - `/real-analysis/` → `/real-analysis/index.html`

## URL Patterns That Work

### Dataset Pages
- ✅ `/dataset/iris/` (canonical)
- ✅ `/dataset/iris` (rewritten to /dataset/iris/index.html)
- ✅ `/dataset/iris.html` (redirects to /dataset/iris/)
- ✅ `/dataset/iris/index.html` (redirects to /dataset/iris/)

### Root Pages
- ✅ `/real-analysis/` (canonical)
- ✅ `/real-analysis` (rewritten to /real-analysis.html)
- ✅ `/real-analysis.html` (redirects to /real-analysis/)

### Homepage
- ✅ `/` (canonical)
- ✅ `/index.html` (redirects to /)

## Files Created/Modified

### CloudFront Function Files
- `cloudfront-function-url-rewrite.js` (initial version)
- `cloudfront-function-updated.js` (with index.html redirects)
- `cloudfront-function-final.js` (with root-level redirects)
- `deploy-cloudfront-function.sh` (deployment script)
- `CLOUDFRONT-SETUP.md` (setup instructions)

### Jekyll Changes
- 1,442 dataset markdown files: Updated permalinks and redirect_from
- 7 root-level HTML files: Added permalinks and redirect_from
- contact.html: Already had permalink, skipped

## CloudFront Distributions Updated
- E13HHNIY0JC994 (jmagunia.com)
- E33QMZ2M6SLSN0 (www.jmagunia.com)

## Next Steps

1. **Deploy to S3**: Upload the built site from `docs/` folder
   ```bash
   aws s3 sync docs/ s3://jmagunia.com/ --delete
   ```

2. **Invalidate CloudFront Cache**: Clear old cached content
   ```bash
   aws cloudfront create-invalidation --distribution-id E13HHNIY0JC994 --paths "/*"
   aws cloudfront create-invalidation --distribution-id E33QMZ2M6SLSN0 --paths "/*"
   ```

3. **Wait**: CloudFront function is already deployed, but invalidations take 5-10 minutes

4. **Test**:
   - https://jmagunia.com/real-analysis (should work)
   - https://jmagunia.com/real-analysis.html (should redirect to /real-analysis/)
   - https://jmagunia.com/dataset/iris (should work)
   - https://jmagunia.com/dataset/iris.html (should redirect to /dataset/iris/)

## SEO Benefits

- Clean, readable URLs without .html extension
- Proper 301 redirects preserve link equity
- Canonical URLs prevent duplicate content issues
- Better user experience with prettier URLs
