import { useContext } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProducList from "../../components/ProductsList";
import { ProductContext } from "../../Providers/ProductContext/ProductContext";
import { StyledTitle } from "./styleTitle";
import { StyledConteiner } from "./styledConteine";
import { StyledConteinerGlobal } from "./styledGlobal";

const HomePage = () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      <Header />
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
