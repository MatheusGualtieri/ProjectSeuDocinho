import { createContext, useEffect, useState } from "react";
import {
  IProductContext,
  IDefaultProviderProps,
  IProducts,
  ITag,
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

  const searchProduct = (data: ITag) => {
    if (selectProduct !== null) {
      const productFound = selectProduct.filter(
        (product) => product.tag === data.tag
      );
      setProducts([...productFound]);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts, searchProduct }}>
      {children}
    </ProductContext.Provider>
  );
};
