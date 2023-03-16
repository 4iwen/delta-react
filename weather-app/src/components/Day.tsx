import Temperature from "./Temperature";

interface DayProps {
    date: string;
    temperature: number;
}

function Day(props: DayProps) {
    return (
        <div className="day">
            <span>{props.date}</span>
            <Temperature value={props.temperature} />
        </div>
    );
}

export default Day;
