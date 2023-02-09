import {ReactElement} from "react";

interface MoveProps {
    index: number;
    goToMove: (index: number) => void;
}

function Move(props: MoveProps): ReactElement {
    return <li className="move">Move
        <button className="goto-button" onClick={() => props.goToMove(props.index) }>Go to</button>
    </li>;
}

export default Move;
