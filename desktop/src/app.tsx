import type { FC, ReactNode } from "react"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@emotion/react"
import { theme, darkTheme } from "@kcctdensan/oonow-libs"
import "./style.css"

type AppProps = {
  children?: ReactNode
}

const App: FC<AppProps> = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
