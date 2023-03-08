import React from "react";
import { InputHTMLAttributes } from "react";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type?: string;
  inputId: string;
  error: string | undefined;
  placeholder: string;
}
