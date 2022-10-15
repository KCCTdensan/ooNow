export const color = {
  white:          "#fff",
  lightGray:      "#aaa",
  heavyWhite:     "#dcddde",
  gray:           "#888",
  darkGray:       "#444",
  dark:           "#222",
  heavyDark:      "#36393f",
  black:          "#000",
  linen:          "#faf0e6",
  darkSlateGray:  "#3f4f5f",
}

export const border = {
  gokuboso: "1px",
  hosoi: "0.2rem",
  futoi: "0.5rem",
  totemohosoi: "0.1rem",
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
  bgDim:    Color[keyof Color]
  bgPle:    Color[keyof Color]
  fg:       Color[keyof Color]
  fgInv:    Color[keyof Color]
  fgDim:    Color[keyof Color]
  fgSub:    Color[keyof Color]
  fgPsc:    Color[keyof Color]
}

const common = { color, border, round }

export const theme: Theme = {
  ...common,
  bg: color.white,
  bgInv: color.dark,
  bgDim: color.heavyDark,
  bgPle: color.linen,
  fg: color.black,
  fgInv: color.white,
  fgDim: color.heavyWhite,
  fgSub: color.darkGray,
  fgPsc: color.heavyWhite,
}

export const darkTheme: Theme = {
  ...common,
  bg: color.dark,
  bgInv: color.white,
  bgDim: color.white,
    bgPle: color.darkSlateGray,
    fg: color.white,
    fgInv: color.black,
    fgSub: color.lightGray,
    fgPsc: color.darkGray,
}
