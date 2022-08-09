import { MainProps } from "./types"
import "./styles.scss"

export const Main = ({ children }: MainProps) => (
  <main className="main">
    {children}
  </main>
)