import { useUserContext } from "../../Providers/UserContext";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const PerfilPage = () => {
  const { user } = useUserContext();
  return (
    <>
      <Header />
      <main>
        <h1>Olá, {user?.name}. Seja bem vindo!</h1>
      </main>
      <Footer />
    </>
  );
};

export default PerfilPage;
