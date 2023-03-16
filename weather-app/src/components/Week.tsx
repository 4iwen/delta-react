import Day from "./Day";

interface WeekProps {
    weatherData: any;
}

function Week(props: WeekProps) {
    return (
        <div className="week">
            {props.weatherData.map((day: any) => {
                return <Day date={day.datetime} temperature={day.temp} />;
            })}
        </div>
    );
}

export default Week;
