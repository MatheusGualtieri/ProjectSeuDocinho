import { useContext } from "react";
import { ProductContext } from "./../../../Providers/ProductContext/ProductContext";
import { IProducts } from "../../../Providers/ProductContext/@typesProduct";
import { FaTrash } from "react-icons/fa";
import { ButtonIcon } from "../../../styles/buttons";

export function ModalCartProduct() {
  const { listaCompra, setListaCompra } = useContext(ProductContext);

  function removerDaLista(id: number) {
    const listaAtualizada = listaCompra?.filter(
      (produtos) => produtos.id !== id
    );
    setListaCompra(listaAtualizada as IProducts[]);
  }

  return (
    <>
      {listaCompra?.map((selecao: IProducts) => (
        <li key={selecao.id}>
          <img src={selecao.img} alt={selecao.title} />
          <div>
            <div>
              <h4>{selecao.title}</h4>
              <ButtonIcon onClick={() => removerDaLista(selecao.id)}>
                <FaTrash></FaTrash>
              </ButtonIcon>
            </div>
            <small>{selecao.tag}</small>
          </div>
        </li>
      ))}
    </>
  );
}
