import { useState } from "react";

import { InputProps } from "../../models/InputProps";
import "./input.css";

const Input: React.FC<InputProps> = ({ placeholder, label }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFocusOut();
  };
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const onFocus = () => {
    setIsEditing(true);
  };
  const onFocusOut = () => {
    setIsEditing(false);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="input">{label}</label>
        {isEditing ? (
          <input
            value={inputValue}
            type="text"
            id="input"
            onBlur={onFocusOut}
            onChange={inputChange}
            autoFocus
          />
        ) : (
          <p onClick={onFocus}>{inputValue ? inputValue : placeholder}</p>
        )}
      </div>
    </form>
  );
};

export default Input;
