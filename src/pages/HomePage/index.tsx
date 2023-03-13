import { useContext } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ProducList from "../../components/ProductsList";
import { IoLogoWhatsapp } from "react-icons/io";
import { ProductContext } from "../../Providers/ProductContext/ProductContext";
import { StyledTitle } from "./styleTitle";
import { StyledConteiner } from "./styledConteine";
import { StyledConteinerGlobal } from "./styledGlobal";
import { StyledLoading } from "./animationLoading";

const HomePage = () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      <Header />

      <StyledConteinerGlobal>
        <StyledTitle>
          <p>Nossos Produtos</p>
          <a href="https://wa.me/5548996252694" target="_blank">
            <IoLogoWhatsapp className="whatsapp" />
          </a>
        </StyledTitle>
        <StyledConteiner className={!products ? "empty" : ""}>
          {!products ? (
            <StyledLoading>Carregando...</StyledLoading>
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
