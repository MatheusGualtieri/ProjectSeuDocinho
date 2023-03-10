import { createContext, useContext, useState } from "react";
import {
  IUserContextProps,
  IUserContext,
  IUserUpdate,
  IUser,
  ILoginFormValue,
  IRegisterFormValue,
} from "./@typesUser";
import { api } from "../../Services";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const tokenOnLocalStorage = window.localStorage.getItem("") || null;
  const [token, setToken] = useState(tokenOnLocalStorage);
  const [loading, setLoading] = useState(false);
  const [modalLog, setModalLog] = useState(false);
  const [modalReg, setModalReg] = useState(false);

  const userRegister = async (data: IRegisterFormValue) => {
    try {
      setLoading(true);
      const response = await api.post("register", data);
      setUser(response.data.user);
      setModalReg(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (data: ILoginFormValue) => {
    try {
      setLoading(true);
      const response = await api.post("login", data);
      setUser(response.data);
      setModalLog(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (data: IUserUpdate) => {
    try {
      setLoading(true);
      const response = await api.put("users", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        updateUser,
        userLogin,
        userRegister,
        modalLog,
        setModalLog,
        modalReg,
        setModalReg,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
