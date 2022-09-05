import { useDarkMode } from "storybook-dark-mode"
import UIButton from "components/atoms/UIButton"

export default {
  title: "Atoms/UIButton",
  component: UIButton,
}

export const Variants = () => {
  const dark = useDarkMode()
  const handler = () => console.log("UIButton pressed!")
  const opts = { dark, handler }

  return (
    <section>
      {[
        <UIButton {...opts} text={"Basic"} />,
        <UIButton {...opts} text={"Strong"} strong />,
      ].map((e, i) => (
        <div css={{
          margin: "1rem 0",
        }} key={i}>{e}</div>
      ))}
    </section>
  )
}
