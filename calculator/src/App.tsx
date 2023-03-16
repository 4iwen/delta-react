import "./App.css";
import NumberInput from "./components/NumberInput";
import OperationInput from "./components/OperationInput";
import Result from "./components/Result";
import { useEffect, useState } from "react";
import History from "./components/History";

export enum Operation {
  ADD = "+",
  SUBTRACT = "-",
  MULTIPLY = "*",
  DIVIDE = "/",
  MODULO = "%",
}

function App() {
  const [numberA, setNumberA] = useState<number>(0);
  const [numberB, setNumberB] = useState<number>(0);
  const [operation, setOperation] = useState<Operation>(Operation.ADD);
  const [result, setResult] = useState<number>(0);
  useEffect(() => {
    console.table({ numberA, operation, numberB, result });

    switch (operation) {
      case Operation.ADD:
        setResult(numberA + numberB);
        break;
      case Operation.SUBTRACT:
        setResult(numberA - numberB);
        break;
      case Operation.MULTIPLY:
        setResult(numberA * numberB);
        break;
      case Operation.DIVIDE:
        setResult(numberA / numberB);
        break;
      case Operation.MODULO:
        setResult(numberA % numberB);
        break;
    }
  }, [numberA, numberB, operation]);

  const [history, setHistory] = useState<string[]>([]);
  useEffect(() => {
    setHistory((history) => [
      ...history,
      `${numberA} ${operation} ${numberB} = ${Math.round(result * 100) / 100}`,
    ]);
  }, [result]);

  useEffect(() => {
    setHistory([]);
  }, []);

  return (
    <div className="App">
      <h1 className="text-3xl font-bold text-red-500">Calculator</h1>
      <NumberInput number={numberA} setNumber={setNumberA} />
      <OperationInput setOperation={setOperation} />
      <NumberInput number={numberB} setNumber={setNumberB} />
      <Result result={result} />
      <History history={history} setHistory={setHistory} />
    </div>
  );
}

export default App;
