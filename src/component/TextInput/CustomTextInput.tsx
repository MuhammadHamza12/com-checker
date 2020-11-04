import React, { ChangeEvent } from "react";

interface TextInputProps {
  placeholder: string;
  value: string;
  onCustomChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function CustomTextInput(Props: TextInputProps) {
  return (
    <div>
      <input
        className="form-control"
        value={Props.value}
        type="text"
        onChange={Props.onCustomChange}
        placeholder={Props.placeholder}
      />
    </div>
  );
}
