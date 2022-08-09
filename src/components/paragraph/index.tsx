import { ParagraphProps } from "./types"

export const Paragraph = ({children} : ParagraphProps) => {

  return (
    <p className={"paragraph"}>
      {children}
    </p>
  )
}