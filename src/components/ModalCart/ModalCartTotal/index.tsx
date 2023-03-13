import { useContext } from "react";
import { ButtonPrimary, ButtonA } from "../../../styles/buttons";
import { ProductContext } from "./../../../Providers/ProductContext/ProductContext";
import { useUserContext } from "../../../Providers/UserContext";

export function ModalCartTotal() {
  const { listaCompra, setListaCompra } = useContext(ProductContext);
  const { user, token } = useUserContext();
  const valorCompra = listaCompra?.reduce((contsAnterios, conts) => {
    return contsAnterios + conts.price;
  }, 0);
  const text = `Olá, me chamo ${
    user?.name
  }. Gostaria de pedir: ${listaCompra?.map((item) => {
    return `${item.title}`;
  })}
  Favor entregar no endereço: ${user?.adress}
  O valor total foi de: ${valorCompra
    ?.toFixed(2)
    .toString()
    .replace(".", ",")}`;
  function liparProdutos() {
    setListaCompra([]);
  }
  return (
    <footer>
      <div className="someTotal">
        <p>Total</p>
        <samp>R$ {valorCompra?.toFixed(2).toString().replace(".", ",")}</samp>
      </div>
      <div className="footerButton">
        {token ? (
          <>
            <ButtonA
              className="whatsWapp"
              href={"https://wa.me/5548996252694?text=" + text}
              target="_blank"
            >
              Finalizar
            </ButtonA>
          </>
        ) : (
          <h2>Faça o Login para efetuar o pedido</h2>
        )}
        <ButtonPrimary className="remuv" onClick={() => liparProdutos()}>
          Excluir tudo
        </ButtonPrimary>
      </div>
    </footer>
  );
}
