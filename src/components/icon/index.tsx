import { iconData } from "icons/data";
import { IconProps } from "./types";
import "./styles.scss"

export const Icon = ({ icon, alt, size = "normal", onClick, onHover = false}: IconProps) => {

  const findIcon = iconData.find(object => icon === object.name)

  return (
    <figure className={`icon icon--${size} ${onHover && "icon--hover"}`} onClick={onClick}>
      <img src={findIcon?.src} alt={alt} />
    </figure>
  )
}