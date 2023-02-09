import {ReactElement} from "react";

interface CellProps {
    value: string | null;
    setCell: (index: number) => void;
    index: number;
    nextPlayer: string;
    setNextPlayer: (nextPlayer: string) => void;
    checkWinner: () => void;
    finished: boolean;
}

function Cell(props: CellProps): ReactElement {
    return <div className="cell" onClick={() => {
        if (props.value === null && !props.finished) {
            props.setCell(props.index);
            props.setNextPlayer(props.nextPlayer === "X" ? "O" : "X");
            props.checkWinner();
        }
    }}><span className={props.value === "X" ? "x" : "o"}>{props.value}</span></div>;
}

export default Cell;