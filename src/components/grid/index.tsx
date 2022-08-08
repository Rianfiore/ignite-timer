import { CSSProperties } from "react"
import { GridProps } from "./types"
import "./styles.scss"

export const Grid = ({ direction = "row", children, template }: GridProps) => {

  function setGridTemplate(): CSSProperties | undefined {
    const gridTemplateRows = {
      gridTemplateRows: template
    }
    const gridTemplateColumns = {
      gridTemplateColumns: template
    }
    const gridTemplate = direction === "row" ? gridTemplateColumns : gridTemplateRows

    return gridTemplate
  }

  return (
    <div className={`grid`} style={setGridTemplate()}>
      {children}
    </div>
  )
}