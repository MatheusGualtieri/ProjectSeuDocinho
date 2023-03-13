import { forwardRef, useContext, useState } from "react";
import { StyleCart } from "./style";
import { ModalCartProduct } from "./ModalCartProduct/index";
import { ModalCartTotal } from "./ModalCartTotal/index";
import { ProductContext } from "./../../Providers/ProductContext/ProductContext";
import { MdClose } from "react-icons/md";

const ModalCart = () => {
  const { listaCompra, openModal, funcOpenModal } = useContext(ProductContext);

  return (
    <>
      {openModal ? (
        <StyleCart>
          <div className="containerModal">
            <header>
              <MdClose className="close" onClick={() => funcOpenModal(false)} />
              <h1>Carrinho de compras</h1>
            </header>

            {listaCompra?.length == 0 ? (
              <>
                <span>
                  <h3>Sua sacola está vazia</h3>
                  <small>Adicione itens</small>
                </span>
              </>
            ) : (
              <>
                <ul>
                  <ModalCartProduct />
                </ul>
                <ModalCartTotal />
              </>
            )}
          </div>
        </StyleCart>
      ) : (
        <></>
      )}
    </>
  );
};

export default ModalCart;
