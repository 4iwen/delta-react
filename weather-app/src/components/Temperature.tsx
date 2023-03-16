interface TemperatureProps {
    value: number;
}

function Temperature(props: TemperatureProps) {
    return (
        <div>
            <span>Temperature: {props.value}</span>
        </div>
    );
}

export default Temperature;
