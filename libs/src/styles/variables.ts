export const color = {
  white:          "#fff",
  lightGray:      "#aaa",
  gray:           "#888",
  darkGray:       "#444",
  almostBlack:    "#222",
  black:          "#000",
}

export const colorBg = (dark: boolean) => dark ? color.almostBlack : color.white
export const colorFg = (dark: boolean) => dark ? color.white : color.black

export const gokuboso = "1px"
export const hosoi = "0.2rem"
export const futoi = "0.5rem"

export const round = "0.4rem"
