interface ProductProps {
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

export default function Product(props: ProductProps) {
  return (
    <div className={"ps"}>
      {props.products.map((product) => {
        return (
          <div
            className={product.clicked ? "product-clicked" : "product"}
            onClick={() => {
              const newProducts = props.products.map((p) => {
                if (p.name === product.name) {
                  return {
                    ...p,
                    clicked: !p.clicked,
                  };
                }
                return p;
              });
              props.setProducts(newProducts);

              props.printInfo(product);
            }}
          >
            {product.name}
          </div>
        );
      })}
    </div>
  );
}
