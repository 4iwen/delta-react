import Move from "./Move";
import {ReactElement} from "react";

interface MoveListProps {
    move_count: number;
    goToMove: (index: number) => void;
}

function getMoves(props: MoveListProps): ReactElement {
    return <ol>
        {
            Array(props.move_count).fill(null).map((value, index) =>
                <Move index={index} goToMove={props.goToMove}/>
            )
        }
    </ol>;
}

function MoveList(props: MoveListProps) : ReactElement{
    return <div className="move-list">
        <h2 className="moves-header">Moves</h2>
        {getMoves(props)}
    </div>;
}

export default MoveList;
