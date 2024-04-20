import { useState } from "react";

import InputProps from "../models/input.model";
import "./Input.css";

const Input: React.FC<InputProps> = ({ placeholder, label }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    focusOutHandler();
  };
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };
  const focusHandler = (): void => {
    setIsEditing(true);
  };
  const focusOutHandler = (): void => {
    setIsEditing(false);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-control">
        <label htmlFor="input">{label}</label>
        {isEditing ? (
          <input
            value={inputValue}
            type="text"
            id="input"
            onBlur={focusOutHandler}
            onChange={inputChangeHandler}
            autoFocus
          />
        ) : (
          <p onClick={focusHandler}>{inputValue ? inputValue : placeholder}</p>
        )}
      </div>
    </form>
  );
};

export default Input;
