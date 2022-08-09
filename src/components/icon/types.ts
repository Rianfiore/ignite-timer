import { ReactNode } from "react";
import { IconType } from "icons/types";

export interface IconProps {
  icon: IconType,
  alt: string,
  size?: string,
  children?: ReactNode,
  onClick?: () => void,
  onHover?: boolean
}