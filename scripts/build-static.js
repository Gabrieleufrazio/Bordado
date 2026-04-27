import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the built assets to get the correct file names
const assetsPath = path.join(__dirname, '../dist/client/assets');
const cssFiles = fs.readdirSync(assetsPath).filter(file => file.endsWith('.css'));
const jsFiles = fs.readdirSync(assetsPath).filter(file => file.endsWith('.js'));

// Get the main CSS and JS files (usually the first ones)
const cssFile = cssFiles.find(f => f.includes('styles')) || cssFiles[0];
const mainJsFile = jsFiles.find(f => f.includes('index-') && !f.includes('router')) || jsFiles[0];

// Generate the HTML content
const htmlContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Rodrigo Bordados</title>
    <meta name="description" content="Bordados personalizados feitos à mão." />
    <meta name="author" content="Rodrigo Bordados" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:title" content="Rodrigo Bordados — Bordados que contam histórias" />
    <meta property="og:description" content="Peças bordadas à mão com amor e detalhe. Personalize a sua agora." />
    <link rel="stylesheet" href="./client/assets/${cssFile}" />
</head>
<body>
    <div id="root"></div>
    <script type="module" src="./client/assets/${mainJsFile}"></script>
</body>
</html>`;

// Write the HTML file
fs.writeFileSync(path.join(__dirname, '../dist/index.html'), htmlContent);

console.log('Static HTML file created successfully!');
console.log(`CSS: ${cssFile}`);
console.log(`JS: ${mainJsFile}`);
