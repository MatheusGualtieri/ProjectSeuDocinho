import { useUserContext } from "../../Providers/UserContext";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UpdateForm from "../../components/Form/UpdateForm";
const PerfilPage = () => {
  const { user } = useUserContext();
  return (
    <>
      <Header />
      <main>
        <h1>Olá, {user?.name}. Seja bem vindo!</h1>
        <UpdateForm />
      </main>
      <Footer />
    </>
  );
};

export default PerfilPage;
