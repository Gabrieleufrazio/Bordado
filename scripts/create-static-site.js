import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Vite gera index.html na pasta client
const clientIndexPath = path.join(__dirname, '../dist/client/index.html');
const rootIndexPath = path.join(__dirname, '../dist/index.html');

if (fs.existsSync(clientIndexPath)) {
    // Ler o index.html gerado pelo Vite
    let htmlContent = fs.readFileSync(clientIndexPath, 'utf-8');
    
    // Atualizar caminhos dos assets para usar /Bordado/
    // href="/assets/" -> href="/Bordado/assets/"
    htmlContent = htmlContent.replace(/href="\/assets\//g, 'href="/Bordado/assets/');
    htmlContent = htmlContent.replace(/src="\/assets\//g, 'src="/Bordado/assets/');
    
    fs.writeFileSync(rootIndexPath, htmlContent);
    console.log('index.html created with updated paths!');
} else {
    console.error('Error: dist/client/index.html not found. Build may have failed.');
    process.exit(1);
}

// Copiar assets do client para a raiz
const clientAssetsPath = path.join(__dirname, '../dist/client/assets');
const rootAssetsPath = path.join(__dirname, '../dist/assets');

if (fs.existsSync(clientAssetsPath)) {
    if (!fs.existsSync(rootAssetsPath)) {
        fs.mkdirSync(rootAssetsPath, { recursive: true });
    }
    
    const files = fs.readdirSync(clientAssetsPath);
    files.forEach(file => {
        fs.copyFileSync(
            path.join(clientAssetsPath, file),
            path.join(rootAssetsPath, file)
        );
    });
    console.log('Assets copied to dist/assets/');
}

console.log('Static site ready for deployment!');
