import "./App.css";
import Board from "./components/Board";
import Result from "./components/Result";
import MoveList from "./components/MoveList";
import {BOARD_SIZE, WINNING_COMBINATIONS} from "./settings";
import {useState} from "react";


function App() {
    const [board, setBoard] = useState(Array(BOARD_SIZE * BOARD_SIZE).fill(null));
    const [nextPlayer, setNextPlayer] = useState("X");
    const [finished, setFinished] = useState(false);
    const [winner, setWinner] = useState(null);

    function setCell(index: number) {
        const newBoard = [...board];
        newBoard[index] = nextPlayer;
        setBoard(newBoard);
    }

    function checkWinner() {
        WINNING_COMBINATIONS.forEach((combination) => {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                setWinner(board[a]);
                setFinished(true);
            }
        });
    }

    return (
        <div className="App">
            <h1>Tic Tac Toe</h1>
            <Board board={board} setCell={setCell} nextPlayer={nextPlayer} setNextPlayer={setNextPlayer}
                   checkWinner={checkWinner} finished={finished}/>
            <Result nextPlayer={nextPlayer} finished={finished} winner={winner} setBoard={setBoard}
                    setNextPlayer={setNextPlayer} setFinished={setFinished}/>
            <MoveList/>
        </div>
    );
}

export default App;
