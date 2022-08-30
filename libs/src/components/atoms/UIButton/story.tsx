import UIButton from "components/atoms/UIButton"
import PassDark from "components/story/PassDark"

export default {
  title: "Atoms/UIButton",
  component: UIButton,
  args: {
    handler: () => {},
  }
}

export const Basic = () => (
  <PassDark>
    <UIButton text={"Basic"} />
  </PassDark>
)

export const Strong = () => (
  <PassDark>
    <UIButton text={"Strong"} strong />
  </PassDark>
)
