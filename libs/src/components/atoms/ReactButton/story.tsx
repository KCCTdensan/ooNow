import ReactButton from "."

export default {
  title: "Atoms / ReactButton",
  component: ReactButton,
}

export const Variants = () => (
  <section>
    <ReactButton text={"Basic"} />
    <ReactButton text={"active"} active />
  </section>
)
