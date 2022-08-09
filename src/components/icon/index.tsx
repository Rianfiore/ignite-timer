import { iconData } from "icons/data";
import { IconProps } from "./types";
import "./styles.scss"

export const Icon = ({ icon, alt, size = "normal"}: IconProps) => {

  const findIcon = iconData.find(object => icon === object.name)

  return (
    <figure className={`icon icon--${size}`}>
      <img src={findIcon?.src} alt={alt} />
    </figure>
  )
}