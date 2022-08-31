import { useDarkMode } from "storybook-dark-mode"
import UIButton from "components/atoms/UIButton"

export default {
  title: "Atoms/UIButton",
  component: UIButton,
}

export const Variants = () => {
  const dark = useDarkMode()
  return (
    <section>
      {[
        <UIButton text={"Basic"} dark={dark} />,
        <UIButton text={"Strong"} dark={dark} strong />,
      ].map((e, i) => (
        <div css={{
          margin: "1rem 0",
        }} key={i}>{e}</div>
      ))}
    </section>
  )
}
