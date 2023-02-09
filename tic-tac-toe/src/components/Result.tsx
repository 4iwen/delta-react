import {ReactElement} from "react";
import {BOARD_SIZE} from "../settings";

interface ResultProps {
    nextPlayer: string;
    finished: boolean;
    winner: string | null;
    setBoard: (board: string[] | null[]) => void;
    setNextPlayer: (nextPlayer: string) => void;
    setFinished: (finished: boolean) => void;
}

function Result(props: ResultProps): ReactElement {
    return (
        <div className="result">
            {props.finished && props.winner !== null ? <h2>Winner: {props.winner}</h2> : <h2>Next player: {props.nextPlayer}</h2>}
            <button onClick={() => {
                props.setBoard(Array(BOARD_SIZE * BOARD_SIZE).fill(null))
                props.setNextPlayer("X")
                props.setFinished(false)
            }}>Reset</button>
        </div>
    );
}

export default Result;
