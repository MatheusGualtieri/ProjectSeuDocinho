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

export interface ITitle {
  title: string;
}

export interface IProductContext {
  setProducts: React.Dispatch<React.SetStateAction<IProducts[] | null>>;
  products: IProducts[] | null;

  listaCompra: IProducts[] | null;
  openModal: boolean;
  addListProduct(id: IProducts): void
  setListaCompra: React.Dispatch<React.SetStateAction<IProducts[] | []>>
  funcOpenModal: (boolean: boolean) => void;
  searchProduct: (data: ITitle) => void;
}
