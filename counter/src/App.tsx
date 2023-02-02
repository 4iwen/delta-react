import {useState} from 'react'
import './App.css'
import Counters from "./components/Counters";

export interface CounterInterface {
    id: number;
    value: number;
}

const initCounters = [
    {id: 1, value: 0},
    {id: 2, value: 0},
    {id: 3, value: 0},
    {id: 4, value: 0},
]

function App() {

    const [counters, setCounters] = useState<CounterInterface[]>(initCounters);

    const handleIncrement = (counter: CounterInterface) => {
        const countersCopy = [...counters];
        const index = countersCopy.indexOf(counter);
        countersCopy[index] = {...counter};
        countersCopy[index].value++;
        setCounters(countersCopy);
    }

    const handleDecrement = (counter: CounterInterface) => {
        const countersCopy = [...counters];
        const index = countersCopy.indexOf(counter);
        countersCopy[index] = {...counter};
        countersCopy[index].value--;
        setCounters(countersCopy);
    }

    const handleReset = () => {

    }

    const handleDelete = (counterId: number) => {

    }

    const handleRestart = () => {

    }

    return (
        <div className="main__wrap">
            <Counters
                counters={counters}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
            />
        </div>
    )
}

export default App
