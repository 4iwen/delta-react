import "./App.css";
import React, { createContext, useEffect, useState } from "react";
import Body from "./components/Body";

function App() {
  const [products, setProducts] = useState([
    {
      name: "Product 3",
      price: 300,
      description: "Product 3 description",
      clicked: false,
    },
    {
      name: "Product 2",
      price: 200,
      description: "Product 2 description",
      clicked: false,
    },
    {
      name: "Product 1",
      price: 100,
      description: "Product 1 description",
      clicked: false,
    },
  ]);

  useEffect(() => {
    console.log("products changed");
  }, [products]);

  function printInfo(product: {
    name: string;
    price: number;
    description: string;
  }) {
    console.log(
      "Product clicked: \n " +
        product.name +
        "\n " +
        +product.price +
        "\n " +
        product.description
    );
  }

  const context = createContext(products);

  return (
    <div className="App">
      <Body
        products={products}
        printInfo={printInfo}
        setProducts={setProducts}
      ></Body>
    </div>
  );
}

export default App;
