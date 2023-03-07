import { createContext, useEffect, useState } from "react";
import {
  IProductContext,
  IDefaultProviderProps,
  IProducts,
} from "./@typesProduct";
import { api } from "../../Services";

export const ProductContext = createContext({} as IProductContext);

export const ProductProvider = ({ children }: IDefaultProviderProps) => {
  const [products, setProducts] = useState<IProducts[] | null>(null);

  const getProduct = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
