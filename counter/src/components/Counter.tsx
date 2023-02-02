import {ReactElement} from "react";
import {CounterInterface} from "../App";

interface CounterPropsInterface {
    counter: CounterInterface;
    onIncrement: (counter: CounterInterface) => void;
    onDecrement: (counter: CounterInterface) => void;
}

export default function Counter({counter, onDecrement, onIncrement}: CounterPropsInterface): ReactElement {
    return (
        <div className="">
            <div>
                {counter.value}
            </div>
            <button className="btn btn-secondary" onClick={() => onDecrement(counter)}>-</button>
            <button className="btn btn-secondary" onClick={() => onIncrement(counter)}>+</button>
        </div>
    );
}