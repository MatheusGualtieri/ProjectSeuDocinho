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
  const userOnLocalStorage = window.localStorage.getItem("@USER");
  const userIsOnLocalStorage = userOnLocalStorage
    ? JSON.parse(userOnLocalStorage)
    : null;
  const [user, setUser] = useState<IUser | null>(userIsOnLocalStorage);
  const tokenOnLocalStorage = window.localStorage.getItem("@TOKEN") || null;
  const [token, setToken] = useState(tokenOnLocalStorage);
  const [loading, setLoading] = useState(false);
  const [modalLog, setModalLog] = useState(false);
  const [modalReg, setModalReg] = useState(false);

  const userRegister = async (data: IRegisterFormValue) => {
    try {
      setLoading(true);
      console.log("oi");
      const response = await api.post("register", data);
      setUser(response.data.user);
      window.localStorage.setItem("@USER", JSON.stringify(response.data.user));
      window.localStorage.setItem("@TOKEN", response.data.accessToken);
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
      setUser(response.data.user);
      setToken(response.data.accessToken);
      window.localStorage.setItem("@USER", JSON.stringify(response.data.user));
      window.localStorage.setItem("@TOKEN", response.data.accessToken);
      setModalLog(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async ({
    adress,
    password,
    email,
    phone,
  }: IUserUpdate) => {
    let data = {};
    if (password.length > 0) {
      data = { ...data, password };
    }
    console.log(data);
    if (adress.length > 0) {
      data = { ...data, adress };
    }
    console.log(data);
    if (email.length > 0) {
      data = { ...data, email };
    }
    console.log(data);
    if (phone.length > 0) {
      data = { ...data, phone };
    }
    console.log(data);
    try {
      setLoading(true);
      const response = await api.patch(`users/${user?.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      setUser(response.data);
      window.localStorage.setItem("@USER", JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    setToken(null);
    setUser(null);
    window.localStorage.clear();
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
        token,
        logoutUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
