import { ReactNode } from "react";

type FlexPosition = "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "initial" | "inherit"

export interface FlexProps {
  direction?: "row" | "column"
  justifyContent?: FlexPosition
  alignItems?: FlexPosition
  gap?: string
  children: ReactNode
}