import Wrapper from "./Wrapper";

interface BodyProps {
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

export default function Body(props: BodyProps) {
  return (
    <Wrapper
      products={props.products}
      printInfo={props.printInfo}
      setProducts={props.setProducts}
    ></Wrapper>
  );
}
