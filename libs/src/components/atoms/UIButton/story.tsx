import UIButton from "."

export default {
  title: "Atoms / UIButton",
  component: UIButton,
}

export const Variants = () => (
  <section>
    <div>
      <UIButton text={"Basic"} />
    </div>
    <div>
      <UIButton text={"Strong"} strong />
    </div>
  </section>
)
