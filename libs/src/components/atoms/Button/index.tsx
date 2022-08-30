import { FC } from "react"

type ButtonProps = {
  text: string
  handler: React.MouseEventHandler<HTMLButtonElement>
  primary: boolean
}

const Button: FC<ButtonProps> = ({ text, handler, primary }) => {
  return (
    <button
      css={{
        backgroundColor: primary ? "red" : "blue",
      }}
      onClick={handler}>
      {text}
    </button>
  )
}

export default Button
