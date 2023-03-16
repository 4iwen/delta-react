interface ResultProps {
  result: number;
}

export default function Result(props: ResultProps) {
  return (
    <div>
      <p className="text-2xl font-bold">
        Result is:{" "}
        <span className="text-green-500">
          {Math.round(props.result * 100) / 100}
        </span>
      </p>
    </div>
  );
}
