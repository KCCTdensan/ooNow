import { resolve } from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      formats: ["es"],
      entry: resolve(__dirname, "src/main.ts"),
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
      ],
    },
  },
})
