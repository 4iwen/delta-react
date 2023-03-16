interface HistoryProps {
  history: string[];
  setHistory: (history: string[]) => void;
}
export default function History(props: HistoryProps) {
  return (
    <div>
      <h1 className={"text-xl font-bold m-2 text-blue-300"}>History</h1>
      <div className="overflow-y-auto h-64 border-2 rounded m-2">
        {props.history.map((element) => (
          <p className={"text-xl"}>{element}</p>
        ))}
      </div>
      <button
        className="btn text-yellow-500"
        onClick={() => {
          props.setHistory([]);
        }}
      >
        Clear
      </button>
    </div>
  );
}
