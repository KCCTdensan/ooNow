import { FC } from "react"
import { ThemeProvider } from "@emotion/react"

import { Text } from "react-native"
import { UIButton, theme } from "@kcctdensan/oonow-libs/dist/native"

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <UIButton text={"hello"} />
      <Text>asdf</Text>
    </ThemeProvider>
  )
}

export default App
