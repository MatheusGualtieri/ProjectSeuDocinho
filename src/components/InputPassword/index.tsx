import { IInputProps } from "./@typesInput";
import { forwardRef, useState } from "react";
const InputPassword = forwardRef<HTMLInputElement, IInputProps>(
  ({ label, inputId, placeholder, type, error, ...rest }, ref) => {
    const [inputType, setInputType] = useState(type);
    const toggleViewInput = () => {
      if (inputType === "password") {
        setInputType("text");
      } else {
        setInputType("password");
      }
    };
    return (
      <>
        <label htmlFor={inputId}>{label}</label>
        <input
          placeholder={placeholder}
          id={inputId}
          type={inputType}
          {...rest}
          ref={ref}
        />
        <button type="button" onClick={() => toggleViewInput()}>
          Mostrar Senha
        </button>
        <p>{error}</p>
      </>
    );
  }
);

export default InputPassword;
