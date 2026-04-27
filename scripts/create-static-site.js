import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the built assets from client folder
const clientAssetsPath = path.join(__dirname, '../dist/client/assets');
const rootAssetsPath = path.join(__dirname, '../dist/assets');

// Create root assets folder if needed
if (!fs.existsSync(rootAssetsPath)) {
    fs.mkdirSync(rootAssetsPath, { recursive: true });
}

// Copy all assets from client to root for easier access
const files = fs.readdirSync(clientAssetsPath);
files.forEach(file => {
    fs.copyFileSync(
        path.join(clientAssetsPath, file),
        path.join(rootAssetsPath, file)
    );
});

// Now read from root assets
const cssFiles = fs.readdirSync(rootAssetsPath).filter(file => file.endsWith('.css'));
const jsFiles = fs.readdirSync(rootAssetsPath).filter(file => file.endsWith('.js'));

const cssFile = cssFiles.find(f => f.includes('styles')) || cssFiles[0];
const mainJsFile = jsFiles.find(f => f.includes('index-') && !f.includes('router')) || jsFiles[0];

// Create a simpler HTML that works with static hosting
const htmlContent = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Rodrigo Bordados — Bordados personalizados feitos à mão</title>
    <meta name="description" content="Bordados artesanais e personalizados: roupas, enxoval infantil e presentes únicos. Peça sua personalização pelo WhatsApp." />
    <meta name="author" content="Rodrigo Bordados" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="og:title" content="Rodrigo Bordados — Bordados que contam histórias" />
    <meta property="og:description" content="Peças bordadas à mão com amor e detalhe. Personalize a sua agora." />
    <link rel="stylesheet" href="/Bordado/assets/${cssFile}" />
    <style>
        /* Loading styles */
        #loading {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #fafafa;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: system-ui, -apple-system, sans-serif;
            z-index: 9999;
        }
        .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #d4a574;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body>
    <div id="loading">
        <div style="text-align: center;">
            <div class="spinner"></div>
            <p style="margin-top: 20px; color: #666;">Carregando Rodrigo Bordados...</p>
        </div>
    </div>
    <div id="root"></div>
    <script type="module">
        // Hide loading when React app mounts
        window.addEventListener('load', () => {
            setTimeout(() => {
                const loading = document.getElementById('loading');
                if (loading && document.getElementById('root').children.length > 0) {
                    loading.style.display = 'none';
                }
            }, 1000);
        });
    </script>
    <script type="module" src="/Bordado/assets/${mainJsFile}"></script>
</body>
</html>`;

// Write the HTML file
fs.writeFileSync(path.join(__dirname, '../dist/index.html'), htmlContent);

console.log('Static site created successfully!');
console.log(`CSS: ${cssFile}`);
console.log(`JS: ${mainJsFile}`);
console.log('Assets ready in dist/assets/');
