# Deployment Instructions

## Overview
This project has been configured to work with both GitHub Pages and Vercel static hosting. The build process creates a static HTML file that works without requiring a server.

## Build Process
The project uses a custom build script that:
1. Builds the React app with Vite
2. Creates a static HTML file that references the built assets
3. Copies assets to the root level for better compatibility

### Command
```bash
npm run build:static
```

## GitHub Pages Deployment

### Automatic Deployment (Recommended)
1. Push your code to the main branch
2. The GitHub Actions workflow in `.github/workflows/deploy.yml` will automatically:
   - Build the static site
   - Deploy to GitHub Pages

### Manual Deployment
1. Run the build command:
   ```bash
   npm run build:static
   ```
2. Push to your repository
3. In GitHub repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main
   - Folder: /root

## Vercel Deployment

### Automatic Deployment
1. Connect your repository to Vercel
2. Vercel will automatically detect the configuration from `vercel.json`
3. The build command `npm run build:static` will be used
4. Output directory is set to `dist`

### Manual Deployment
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Run:
   ```bash
   npm run build:static
   vercel --prod
   ```

## Configuration Files

### vercel.json
```json
{
  "buildCommand": "npm run build:static",
  "outputDirectory": "dist",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### GitHub Actions Workflow
The workflow in `.github/workflows/deploy.yml` handles automatic deployment to GitHub Pages when code is pushed to the main branch.

## Local Testing
To test the build locally:
1. Build the static site:
   ```bash
   npm run build:static
   ```
2. Serve the dist folder:
   ```bash
   cd dist
   python -m http.server 8080
   ```
3. Open http://localhost:8080 in your browser

## Troubleshooting

### 404 Errors
- Ensure the build command `npm run build:static` was used
- Check that the `dist/index.html` file exists
- Verify asset paths in the HTML file

### Styles Not Loading
- Check that the CSS file exists in `dist/assets/`
- Verify the CSS filename matches the one in the HTML
- Ensure the asset paths are correct

### JavaScript Errors
- Check browser console for specific errors
- Verify the JavaScript file exists in `dist/assets/`
- Ensure the JS filename matches the one in the HTML

## File Structure After Build
```
dist/
├── index.html              # Main HTML file
├── assets/                 # All static assets
│   ├── styles-*.css        # Compiled CSS
│   ├── index-*.js          # Main JavaScript
│   └── *.jpg               # Images
├── client/                 # Original build output (can be ignored)
└── server/                 # Server build output (can be ignored)
```

## Notes
- The project uses TanStack Start which is primarily designed for SSR
- The custom build script converts it to work with static hosting
- All routing is handled client-side using React Router
- The site includes a loading screen that hides when the React app mounts
