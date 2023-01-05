import { ReactNode } from "react";
import { createPortal } from "react-dom";


export enum TargetPortal {
  ROOT = "root",
  MODAL = "modal",
}

interface Iprops {
  children: ReactNode;
  target: TargetPortal;
}

export const Portal = ({ children, target }: Iprops) => {
  const container = document.getElementById(target) as HTMLElement;
  return createPortal(children, container);
};
