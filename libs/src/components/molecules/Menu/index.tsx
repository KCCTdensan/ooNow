import { FC, ReactNode, useEffect, useRef, useState } from "react"
import { css } from "@emotion/react"

type Props = {
  title: string
  // withIcon?: boolean
  children?: ReactNode
}

const Menu: FC<Props> = ({ title, /* withIcon, */ children }) => {
  const childElement = useRef<HTMLDivElement>(null)
  const [showChildren, setShowChildren] = useState(false)
  const [childHeight, setChildHeight] = useState(0)
  // const [reverseIcon, setReverseIcon] = useState(false)

  useEffect(() => {
    if (childElement.current) {
      const height = childElement.current?.clientHeight
      setChildHeight(height)
    }
  }, [])

  const handleClick = () => {
    if (childElement.current) {
      setShowChildren(!showChildren)
    }
    // setReverseIcon(!reverseIcon)
  }

  return (
    <>
      <div
        onClick={handleClick}
        css={css`
          width: 100px;
          height: 25px;
          border: 0px solid;
          padding: 10px 20px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-weight: bold;
        `}>
        {title}
      </div>
      <div
        css={css`
          height: ${children && showChildren ? `${childHeight}px` : "0px"};
          cursor: pointer;
          font-weight: bold;
          transition: height 0.2s linear, opacity 0.2s ease-in;
          opacity: ${children && showChildren ? "1" : "0"};
          overflow: hidden;
        `}>
        <div ref={childElement}>{children}</div>
      </div>
    </>
  )
}

export default Menu
