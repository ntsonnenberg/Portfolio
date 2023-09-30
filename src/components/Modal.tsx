import React, { useEffect } from "react";
import ReactDOM from "react-dom";

interface Props {
  children: JSX.Element;
}

export default function Modal({ children }: Props): JSX.Element | null {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => document.body.classList.remove("overflow-hidden");
  }, []);

  const modalContainer = document.querySelector(".modal-container");

  if (!modalContainer) {
    return null;
  }

  return ReactDOM.createPortal(
    <div>
      <div className="fixed inset-0 bg-on-background opacity-50"></div>
      <div>{children}</div>
    </div>,
    modalContainer
  );
}
