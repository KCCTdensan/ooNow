export const color = {
  white:      "#fff",
  lightGray:  "#aaa",
  gray:       "#888",
  darkGray:   "#444",
  dark:       "#222",
  black:      "#000",
}

export const border = {
  gokuboso: "1px",
  hosoi: "0.2rem",
  futoi: "0.5rem",
}

export const round = {
  normal: "0.4rem",
}

type Color = typeof color
type Border = typeof border
type Round = typeof round

export type Theme = {
  color:    Color
  border:   Border
  round:    Round

  bg:       Color[keyof Color]
  bgInv:    Color[keyof Color]
  fg:       Color[keyof Color]
  fgInv:    Color[keyof Color]
}

const common = { color, border, round }

export const theme: Theme = {
  ...common,
  bg: color.white,
  bgInv: color.dark,
  fg: color.black,
  fgInv: color.white,
}

export const darkTheme: Theme = {
  ...common,
  bg: color.dark,
  bgInv: color.white,
  fg: color.white,
  fgInv: color.black,
}
