import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { dadosAbertosURL } from "./src/services/dadosAbertosURL"

export default defineConfig({
  base: "./",
  plugins: [react()],
  json: {
    stringify: false  // Permite importar JSON como objetos JavaScript
  },
  server: {
    proxy: {
      "/api": {
        target: dadosAbertosURL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/auth": {
        target: "https://vortex-hmg.unifor.br/bora-de-bike/v2/",
        changeOrigin: true,
      },
      "/content": {
        target: "https://vortex-hmg.unifor.br/bora-de-bike/v2/",
        changeOrigin: true,
      },
      "/geojson": {
        target: "https://vortex-hmg.unifor.br/bora-de-bike/v2/",
        changeOrigin: true,
      },
    },
  },
  // publicPath: "/pedala-mais-teste",
})
