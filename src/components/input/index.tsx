import { Icon } from "components"
import { useState } from "react"
import "./styles.scss"
import { InputProps } from "./types"

export const Input = ({type, placeholder = "", modifier = false, modifierMin = 0, modifierMax = Infinity} : InputProps) => {
  const [input, setInput] = useState<number>(Number(placeholder))
  const size = placeholder.length * 1.2;

  const addSubValue = (operator : string) => {
      if (input >= modifierMax) return
      operator === "add" && setInput(input + 1)
      
      if (input <= modifierMin) return
      operator === "sub" && setInput(input - 1)
  }

  return (
    modifier ? (
      <>
         <Icon icon="minus" alt="minus icon" onHover onClick={() => addSubValue("sub")}/>
         <input
         className={`input input--${type}`}
         value={input} placeholder={placeholder}
         type={type} size={size}
         onChange={e => setInput(Number(e.target.value))} />
         <Icon icon="plus" alt="plus icon" onHover onClick={() => addSubValue("add")}/>
      </>
     ) : <input className={`input input--${type}`} placeholder={placeholder} type={type} size={size} />
  )
}