import { resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { build } from "vite"

const __dirname = fileURLToPath(new URL(".", import.meta.url))

await build({
  build: {
    lib: {
      entry: resolve(__dirname, "src/dom.ts"),
      formats: ["es"],
      fileName: "dom",
    },
  },
})

await build({
  build: {
    lib: {
      entry: resolve(__dirname, "src/native.ts"),
      formats: ["es"],
      fileName: "native",
    },
    emptyOutDir: false,
  },
})
