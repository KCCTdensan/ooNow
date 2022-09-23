import ButtonLink from "."

export default {
  title: "Molecules / ButtonLink",
  component: ButtonLink,
}

export const Variants = () => (
  <section>
    <ButtonLink text={"Basic"} to={"hoge"} />
    <ButtonLink text={"Strong"} to={"fuga"} strong />
  </section>
)
