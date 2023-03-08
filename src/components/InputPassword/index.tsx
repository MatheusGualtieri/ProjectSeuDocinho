import { IInputProps } from "./@typesInput";
import { forwardRef, useState } from "react";
import { StyledInputPassword, StyledContainerInput } from "./style";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { ButtonIcon } from "../../styles/buttons";

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
        <StyledContainerInput>
          <StyledInputPassword
            placeholder={placeholder}
            id={inputId}
            type={inputType}
            {...rest}
            ref={ref}
          />
          <ButtonIcon type="button" onClick={() => toggleViewInput()}>
            {inputType === "password" ? <FaEye /> : <FaEyeSlash />}
          </ButtonIcon>
        </StyledContainerInput>
        <p>{error}</p>
      </>
    );
  }
);

export default InputPassword;
