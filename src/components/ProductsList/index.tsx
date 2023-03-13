import { useContext } from "react";
import { ProductContext } from "../../Providers/ProductContext/ProductContext";
import { StyledProductList } from "./styled";

const ProducList = ({ id }: { id: number }) => {
  const { products, addListProduct } = useContext(ProductContext);
  const findProduct = products?.filter((product) => product.id == id);

  return (
    <StyledProductList>
      {findProduct?.map((product) => (
        <div key={product.id}>
          <img src={product.img} />
          <div className="conteinerInfo">
            <div className="info">
              <p>{product.tag} </p>
              <p className="description">{product.description}</p>
              <span>{product.price}</span>
            </div>
            <button onClick={()=> addListProduct(product)}>Adicionar ao carrinho</button>
          </div>
        </div>
      ))}
    </StyledProductList>
  );
};

export default ProducList;
