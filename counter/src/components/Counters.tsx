import {ReactElement} from "react";
import {CounterInterface} from "../App";
import Counter from "./Counter";

interface CounterPropsInterface {
    counters: CounterInterface[];
    onIncrement: (counter: CounterInterface) => void;
    onDecrement: (counter: CounterInterface) => void;
}

export default function Counters({counters, onIncrement, onDecrement}: CounterPropsInterface):
    ReactElement {
    return (
        <div>
            {counters.map((counter: CounterInterface): ReactElement => (
                <Counter
                    counter={counter}
                    onDecrement={onDecrement}
                    onIncrement={onIncrement}
                />
            ))}
        </div>
    );
}