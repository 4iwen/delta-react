import Cell from "./Cell";
import {BOARD_SIZE} from "../settings";
import {ReactElement} from "react";

interface BoardProps {
    board: string[] | null[];
    setCell: (index: number) => void;
    nextPlayer: string;
    setNextPlayer: (nextPlayer: string) => void;
    checkWinner: () => void;
    finished: boolean;
    addMove: () => void;
}

function Board(props: BoardProps): ReactElement {
    return <div className="board">
        {
            props.board.map((value, index) =>
                <Cell
                    index={index}
                    value={value}
                    setCell={props.setCell}
                    setNextPlayer={props.setNextPlayer}
                    nextPlayer={props.nextPlayer}
                    checkWinner={props.checkWinner}
                    finished={props.finished}
                    addMove={props.addMove}
                />
            )
        }

    </div>;
}

export default Board;
