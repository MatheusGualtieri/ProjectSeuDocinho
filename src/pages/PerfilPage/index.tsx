import { useUserContext } from "../../Providers/UserContext";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UpdateForm from "../../components/Form/UpdateForm";
import { StyledContainer } from "../../styles/container";
import { StyledMain } from "./style";
const PerfilPage = () => {
  const { user } = useUserContext();
  return (
    <>
      <Header />
      <StyledMain>
        <StyledContainer>
          <h1>Olá, {user?.name}. Seja bem vindo!</h1>
          <UpdateForm />
        </StyledContainer>
      </StyledMain>
      <Footer />
    </>
  );
};

export default PerfilPage;
