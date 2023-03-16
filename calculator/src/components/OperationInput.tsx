import { Operation } from "../App";

interface OperationInputProps {
  setOperation: (operation: Operation) => void;
}

export default function OperationInput(props: OperationInputProps) {
  return (
    <div>
      <select
        className="border-2 rounded p-2 m-2 w-40"
        onChange={(e) => {
          props.setOperation(e.target.value as Operation);
        }}
      >
        {Object.values(Operation).map((operation) => (
          <option value={operation}>{operation}</option>
        ))}
      </select>
    </div>
  );
}
