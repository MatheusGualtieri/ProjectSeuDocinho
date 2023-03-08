import { IInputProps } from "./@typesInput";
import { forwardRef } from "react";
const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, inputId, placeholder, type, error, ...rest }, ref) => {
    return (
      <>
        <label htmlFor={inputId}>{label}</label>
        <input
          placeholder={placeholder}
          id={inputId}
          type={type}
          {...rest}
          ref={ref}
        />
        <p>{error}</p>
      </>
    );
  }
);

export default Input;
