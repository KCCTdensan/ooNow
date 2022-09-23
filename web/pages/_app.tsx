import "@kcctdensan/oonow-libs/style.css"
import { ThemeProvider } from "@emotion/react"
import { theme, darkTheme } from "@kcctdensan/oonow-libs/next"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
