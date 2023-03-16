import Product from "./Product";

interface ListProps {
  products: {
    name: string;
    price: number;
    description: string;
    clicked: boolean;
  }[];
  printInfo: (product: {
    name: string;
    price: number;
    description: string;
  }) => void;
  setProducts: (
    products: {
      name: string;
      price: number;
      description: string;
      clicked: boolean;
    }[]
  ) => void;
}

export default function List(props: ListProps) {
  return (
    <Product
      products={props.products}
      printInfo={props.printInfo}
      setProducts={props.setProducts}
    ></Product>
  );
}
