import { useContext } from "react";
import Footer from "../../components/Footer";
import ModalLogin from "../../components/Form/ModalLogin";
import ModalRegister from "../../components/Form/ModalRegister";
import Header from "../../components/Header";
import { UserContext } from "../../Providers/UserContext";
import ProducList from "../../components/ProductsList";
import { ProductContext } from "../../Providers/ProductContext/ProductContext";
import { StyledTitle } from "./styleTitle";
import { StyledConteiner } from "./styledConteine";
import { StyledConteinerGlobal } from "./styledGlobal";

const HomePage = () => {
  const { products } = useContext(ProductContext);
  const { modalLog, modalReg } = useContext(UserContext);

  return (
    <>
      <Header />
      {modalLog ? <ModalLogin /> : null}
      {modalReg ? <ModalRegister /> : null}
      <StyledConteinerGlobal>
        <StyledTitle>
          <p>Nossos Produtos</p>
        </StyledTitle>
        <StyledConteiner>
          {products?.length === 0 ? (
            <p>Carregando...</p>
          ) : (
            products?.map((product) => (
              <ProducList key={product.id} id={product.id} />
            ))
          )}
        </StyledConteiner>
      </StyledConteinerGlobal>
      <Footer />
    </>
  );
};

export default HomePage;
