import React, { useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");
const el = document.createElement("div");

interface IModalPortal {
  children: any;
}

export const ModalPortal: React.FC<IModalPortal> = ({ children }) => {
  useEffect(() => {
    modalRoot?.appendChild(el);
    return () => {
      modalRoot?.removeChild(el);
    };
  }, []);

  return createPortal(children, el);
};
