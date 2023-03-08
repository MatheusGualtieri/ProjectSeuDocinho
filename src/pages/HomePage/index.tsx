import { useContext } from "react";
import Footer from "../../components/Footer";
import ModalLogin from "../../components/Form/ModalLogin";
import ModalRegister from "../../components/Form/ModalRegister";
import Header from "../../components/Header";
import { UserContext } from "../../Providers/UserContext";

const HomePage = () => {
  const { modalLog, modalReg } =
    useContext(UserContext);
  return (
    <>
      <Header />
      {modalLog ? <ModalLogin /> : null}
      {modalReg ? <ModalRegister /> : null}
      <Footer />
    </>
  );
};

export default HomePage;
