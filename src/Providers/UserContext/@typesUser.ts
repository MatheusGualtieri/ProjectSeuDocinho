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
}
export interface ILoginFormValue {
  email: string;
  password: string;
}
