import UIButton from "."

export default {
  title: "Atoms / UIButton",
  component: UIButton,
}

export const Variants = () => (
  <section>
    <UIButton text={"Basic"} />
    <UIButton text={"Strong"} strong />
  </section>
)
