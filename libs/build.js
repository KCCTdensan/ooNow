import { resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { build } from "vite"

const __dirname = fileURLToPath(new URL(".", import.meta.url))

const [head, ...tail] = [
  {
    build: {
      lib: {
        entry: resolve(__dirname, "src/dom.ts"),
        formats: ["es"],
        fileName: "dom",
      },
    },
    define: {
      __BTARGET__: `"dom"`,
    },
  },
  {
    build: {
      lib: {
        entry: resolve(__dirname, "src/base.ts"),
        formats: ["es"],
        fileName: "next",
      },
    },
    define: {
      __BTARGET__: `"next"`,
    },
  },
  {
    build: {
      lib: {
        entry: resolve(__dirname, "src/native.ts"),
        formats: ["es"],
        fileName: "native",
      },
    },
    define: {
      __BTARGET__: `"native"`,
    },
  },
]
tail.forEach(i => (i.build.emptyOutDir = false))

await build(head)
Promise.all(tail.map(build))
