interface NumberInputProps {
  number: number;
  setNumber: (number: number) => void;
}

export default function NumberInput(props: NumberInputProps) {
  return (
    <div>
      <input
        type="number"
        value={props.number}
        className="border-2 rounded p-2 m-2 w-40"
        onChange={(e) => props.setNumber(parseInt(e.target.value))}
      />
    </div>
  );
}
