import { FC } from "react"
import { ThemeProvider } from "@emotion/react"
import { theme, darkTheme } from "@kcctdensan/oonow-libs/dist/native"

import Home from "./pages/Home"

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
