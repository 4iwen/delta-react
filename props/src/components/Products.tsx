import Row from "./Row";

interface ProductsProps {
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

export default function Products(props: ProductsProps) {
  return (
    <Row
      products={props.products}
      printInfo={props.printInfo}
      setProducts={props.setProducts}
    ></Row>
  );
}
