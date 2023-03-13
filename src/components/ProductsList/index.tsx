import { useContext } from "react";
import { ProductContext } from "../../Providers/ProductContext/ProductContext";
import { StyledProductList } from "./styled";
import { ButtonPrimary } from "../../styles/buttons";
const ProducList = ({ id }: { id: number }) => {
  const { products, addListProduct } = useContext(ProductContext);
  const findProduct = products?.filter((product) => product.id == id);

  return (
    <StyledProductList>
      {findProduct?.map((product) => (
        <div className="containerCard" key={product.id}>
          <img src={product.img} />
          <div className="conteinerInfo">
            <div className="info">
              <p>{product.title} </p>
              <p className="tag">{product.tag}</p>
              <p className="description">{product.description}</p>
              <span>R$ {product.price.toFixed(2)}</span>
            </div>
            <ButtonPrimary onClick={() => addListProduct(product)}>
              Adicionar ao carrinho
            </ButtonPrimary>
          </div>
        </div>
      ))}
    </StyledProductList>
  );
};

export default ProducList;
