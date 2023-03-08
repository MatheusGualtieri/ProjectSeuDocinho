import { ReactNode } from "react";

export interface IUser {
  email: string;
  password: string;
  name: string;
  adress: string;
  phone: number;
  id: number;
}

export interface IUserUpdate {
  email: string;
  password: string;
  confirmPassword: string;
  adress: string;
  phone: number;
}

export interface IUserContextProps {
  children: ReactNode;
}

export interface IUserContext {
  user: IUser | null;
  loading: boolean;
  updateUser: (data: IUserUpdate) => Promise<void>;
  userLogin: (data: ILoginFormValue) => Promise<void>;
  userRegister: (data: IRegisterFormValue) => Promise<void>;
  modalLogin: boolean;
  setModalLogin: React.Dispatch<React.SetStateAction<boolean>>;
  modalRegister: boolean;
  setModalRegister: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface ILoginFormValue {
  email: string;
  password: string;
}
export interface IRegisterFormValue{
  name: string;
  email: string; 
  adress: string;
 phone: string;
 password: string;
 confirmPassword: string;
}