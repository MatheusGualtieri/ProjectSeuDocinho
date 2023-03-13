import { createContext, useEffect, useState } from "react";
import {
  IProductContext,
  IDefaultProviderProps,
  IProducts,
  ITitle,
} from "./@typesProduct";
import { api } from "../../Services";

export const ProductContext = createContext({} as IProductContext);

export const ProductProvider = ({ children }: IDefaultProviderProps) => {
  const [products, setProducts] = useState<IProducts[] | null>(null);
  const [selectProduct, setSelectProduct] = useState<IProducts[] | null>([]);

  const getProduct = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
      setSelectProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const searchProduct = (data: ITitle) => {
    if (selectProduct !== null) {
      const productFound = selectProduct.filter((product) => {
        return data.title === ""
          ? true
          : product.title.toLowerCase().includes(data.title.toLowerCase()) ||
              product.description
                .toLowerCase()
                .includes(data.title.toLowerCase()) ||
              product.tag.toLowerCase().includes(data.title.toLowerCase());
      });
      setProducts(productFound);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const listaDeCompraSalva = localStorage.getItem("@Carinho");
  const [listaCompra, setListaCompra] = useState<IProducts[] | []>(
    listaDeCompraSalva ? JSON.parse(listaDeCompraSalva) : []
  );

  function funcOpenModal(boolean: boolean) {
      setOpenModal(boolean);
  }
  function addListProduct(produto: IProducts) {
    if(!listaCompra?.some(item => item.id === produto.id)){
      setListaCompra([...listaCompra, produto]);
    }
  }
  useEffect(() => {
    localStorage.setItem("@Carinho", JSON.stringify(listaCompra));
  }, [listaCompra]);

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        searchProduct,
        listaCompra,
        openModal,
        addListProduct,
        setListaCompra,
        funcOpenModal,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
