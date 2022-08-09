import { CSSProperties } from "react"
import { FlexProps } from "./types"
import "./styles.scss"

export const Flex = ({
  direction = "row",
  justifyContent = "center",
  alignItems = "center",
  gap = "inherit",
  children }: FlexProps) => {

  function setStyle(): CSSProperties | undefined {
    const style = {
      flexDirection: direction,
      justifyContent: justifyContent,
      alignItems: alignItems,
      gap: gap,
    }

    return style
  }

  return (
    <div className={`flex`} style={setStyle()}>
      {children}
    </div>
  )
}