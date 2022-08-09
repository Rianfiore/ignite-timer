import { ParagraphProps } from "./types"

import "./styles.scss"

export const Paragraph = ({children} : ParagraphProps) => {

  return (
    <p className={"paragraph"}>
      {children}
    </p>
  )
}