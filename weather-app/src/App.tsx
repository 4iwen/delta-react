import "./App.css";
import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Week from "./components/Week";
import Chart from "./components/Chart";

function App() {
    const [weatherData, setWeatherData] = useState<any>([]);

    return (
        <div className="App">
            <Search setWeatherData={setWeatherData} />
            <Week weatherData={weatherData} />
            <Chart />
        </div>
    );
}

export default App;
