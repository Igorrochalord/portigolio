import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Caminho relativo: funciona em qualquer subpasta (ex.: GitHub Pages em /portigolio/)
  // sem precisar travar o nome do repositório aqui.
  base: "./",
  plugins: [react(), tailwindcss()],
});
