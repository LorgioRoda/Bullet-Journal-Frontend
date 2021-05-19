import React from "react";
import SCSelectButtom from "./SelectButtom.styled";

export default function SelectButtom({ children, onClick, className }) {
  return (
    <SCSelectButtom onClick={() => onClick && onClick()} className={className}>
      {children}
    </SCSelectButtom>
  );
}
