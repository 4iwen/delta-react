import List from "./List";

interface RowProps {
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

export default function Row(props: RowProps) {
  return (
    <List
      products={props.products}
      printInfo={props.printInfo}
      setProducts={props.setProducts}
    ></List>
  );
}
