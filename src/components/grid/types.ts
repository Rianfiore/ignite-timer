import { ReactNode } from "react";

export interface GridProps {
  direction?: "row" | "column"
  template: string
  children: ReactNode
}