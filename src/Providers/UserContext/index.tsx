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
import { toast } from "react-toastify";

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
      const response = await api.post("register", data);
      setUser(response.data.user);
      window.localStorage.setItem("@USER", JSON.stringify(response.data.user));
      window.localStorage.setItem("@TOKEN", response.data.accessToken);
      setModalReg(false);
      toast.success("Cadastro efetuado com sucesso, e logado");
    } catch (error) {
      console.log(error);
      toast.error("Ops, algo deu errado");
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
      toast.success("Login efetuado com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Ops, algo deu errado");
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
    if (adress.length > 0) {
      data = { ...data, adress };
    }
    if (email.length > 0) {
      data = { ...data, email };
    }
    if (phone.length > 0) {
      data = { ...data, phone };
    }
    try {
      setLoading(true);
      const response = await api.patch(`users/${user?.id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(response.data);
      window.localStorage.setItem("@USER", JSON.stringify(response.data));
      toast.success("Atualização de dados efetuada com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Ops, algo deu errado");
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    setToken(null);
    setUser(null);
    window.localStorage.clear();
    toast.success("Saiu!");
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
