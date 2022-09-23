import { resolve } from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import { dependencies } from "./package.json"

// https://github.com/emotion-js/emotion/issues/2853
const deps = Object.keys(dependencies)
const re = new RegExp(`^(${deps.join("|")})($|/)`)
const external = name => re.test(name)

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react({ jsxImportSource: "@emotion/react" }),
  ],
  build: {
    rollupOptions: { external },
  },
  define: {
    __BTARGET__: `"dom"`,
  },
})
