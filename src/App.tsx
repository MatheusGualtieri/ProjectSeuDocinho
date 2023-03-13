import Router from "./routes/routes";
import GlobalStyle from "./styles/globalStyle";
import ModalCart from "./components/ModalCart/index";
import { UserContext } from "./Providers/UserContext";
import { useContext } from "react";
import ModalLogin from "./components/Form/ModalLogin";
import ModalRegister from "./components/Form/ModalRegister";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { modalLog, modalReg } = useContext(UserContext);
  return (
    <div>
      <GlobalStyle />
      <ModalCart />
      {modalLog ? <ModalLogin /> : null}
      {modalReg ? <ModalRegister /> : null}
      <Router />
      <ToastContainer
        toastStyle={{
          backgroundColor: "#343B41",
          color: "#F8F9FA",
        }}
      />
    </div>
  );
};

export default App;
