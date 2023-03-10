import { useContext } from "react";
import { ProductContext } from './../../../Providers/ProductContext/ProductContext';

export function ModalCartTotal() {

  const { listaCompra, setListaCompra } = useContext(ProductContext);

  const valorCompra = listaCompra?.reduce((contsAnterios, conts) => {
    return contsAnterios + conts.price;
  }, 0);
  function liparProdutos() {
    setListaCompra([]);
  }
    return(
      <footer>
        <div className="someTotal">
          <p>Total</p>
          <samp>R$ {valorCompra?.toFixed(2).toString().replace(".", ",")}</samp>
        </div>
        <div className="footerButton">
        <button className="whatsWapp" >Finalizar Pedido</button>
        <button className="remuv" onClick={()=>liparProdutos()} >Excluir tudo</button>
        </div>
      </footer>
    ) ;
  }