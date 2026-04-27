import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Configuração para build estático (sem SSR/TanStack Start)
export default defineConfig({
  base: '/Bordado/',
  plugins: [
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
  build: {
    outDir: 'dist/client',
  },
});
