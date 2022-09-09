import { useState } from "react"
import { ThemeProvider } from "@emotion/react"
import { useDarkMode } from "storybook-dark-mode"
import { theme, darkTheme } from "../src/styles/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const deco = Story => {
  const dark = useDarkMode()

  return (
    <ThemeProvider theme={dark ? darkTheme : theme}>
      <Story />
    </ThemeProvider>
  )
}

export const decorators = [deco]
