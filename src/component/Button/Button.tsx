import React, { StyleHTMLAttributes, ButtonHTMLAttributes } from "react";
import {} from "prop-types";
type ButtonType = "submit" | "reset" | "button";
interface ButtonStyle {
  buttonType: string;
  onCustomClick: () => void;
  btnName: string;
  type: ButtonType;
}
export default function Button(Props: ButtonStyle) {
  return (
    <div>
      <button
        type={Props.type}
        name={Props.btnName}
        onClick={Props.onCustomClick}
        className={`btn ${Props.buttonType}`}
      >
        {Props.btnName}
      </button>
    </div>
  );
}
