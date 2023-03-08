import { IInputProps } from "./@typesInput";

const Input = ({
  label,
  inputId,
  placeholder,
  type,
  error,
  ...rest
}: IInputProps) => {
  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <input placeholder={label} id={inputId} type={type} {...rest} />
      <p>{error}</p>
    </>
  );
};
