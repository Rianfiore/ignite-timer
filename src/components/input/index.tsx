import "./styles.scss"
import { InputProps } from "./types"

export const Input = ({type, placeholder, modifier = false} : InputProps) => {

  return (
    <input className="input" placeholder={placeholder} type={type} />
  )
}