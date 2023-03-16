import { useEffect } from "react";
import { apiKey as WEATHER_API_KEY } from "../../apikey.json";

interface SearchProps {
    setWeatherData: (data: any) => void;
}

function Search(props: SearchProps) {
    useEffect(() => {
        (async () => {
            const weatherDetailResult = await fetch(
                `https://api.weatherbit.io/v2.0/forecast/daily?lat=35.7796&lon=-78.6382&days=7&key=${WEATHER_API_KEY}`
            );
            const data = await weatherDetailResult.json();
            console.log(data);
            props.setWeatherData(data.data);
        })();
    }, []);

    return <div></div>;
}

export default Search;
