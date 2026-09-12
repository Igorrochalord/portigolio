import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Caminho relativo: funciona em qualquer subpasta (ex.: GitHub Pages em /portigolio/)
  // sem precisar travar o nome do repositório aqui.
  base: "./",
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        // Vendors estáveis em chunks próprios: mudam pouco, então o navegador reaproveita
        // o cache entre deploys mesmo quando só o código do app muda. O recharts não entra
        // aqui de propósito — ele já vira um chunk separado sozinho por ser importado via
        // lazy() (Dashboard, AutomationScale, GithubActivity, ProjectChart).
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("node_modules/scheduler")) {
            return "vendor-react";
          }
          if (id.includes("node_modules/framer-motion") || id.includes("node_modules/motion-dom")) {
            return "vendor-motion";
          }
          if (id.includes("node_modules/lucide-react")) {
            return "vendor-icons";
          }
        },
      },
    },
  },
});
