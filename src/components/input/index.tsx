import { Icon } from "components"

import "./styles.scss"
import { InputProps } from "./types"

export const Input = ({type, placeholder, modifier = false} : InputProps) => {


  const renderInput = () => {
    
    const render = modifier ? (
     <>
        <Icon icon="minus" alt="minus icon"/>
        <input className="input" placeholder={placeholder} type={type} />
        <Icon icon="plus" alt="plus icon"/>
     </>
    ) : <input className="input" placeholder={placeholder} type={type} />
    
    return render;
  }

  return renderInput()
}