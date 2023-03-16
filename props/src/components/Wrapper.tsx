import Products from "./Products";

interface WrapperProps {
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

export default function Wrapper(props: WrapperProps) {
  return (
    <Products
      products={props.products}
      printInfo={props.printInfo}
      setProducts={props.setProducts}
    ></Products>
  );
}
