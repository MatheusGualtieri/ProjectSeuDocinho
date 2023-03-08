import { forwardRef } from "react";
import { IInputForm } from "./@typeInputForm";

import { StyeldInput } from "./styled";

const Input = forwardRef<HTMLInputElement, IInputForm>(
    ({ label, inputId, placeholder, type, error, ...rest }, ref) => {
        return (
          <>
            <label htmlFor={inputId}>{label}</label>
            <StyeldInput
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
)


export default Input;