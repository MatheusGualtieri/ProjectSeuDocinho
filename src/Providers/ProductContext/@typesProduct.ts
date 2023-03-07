export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IProducts {
  img: string;
  title: string;
  description: string;
  tag: string;
  price: number;
  id: number;
}

export interface IProductContext {
  setProducts: React.Dispatch<React.SetStateAction<IProducts[] | null>>;
  products: IProducts[] | null;
}
