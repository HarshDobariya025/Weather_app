import { useState } from "react";
import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"

export default function WeatherApp(){
    let [info, setInfo] = useState({
        city: "Delhi",
        temp: 20.66,
        tempMin: 20.66,
        tempMax: 20.66,
        humidity: 30,
        pressure : 1016,
        feelsLike: 19.56,
        windSpeed: 0.48,
        weather: "clear sky",
        seaLevel: 1016,
        grounLevel: 990,
    });

    let weatherInfo = (info) => {
        setInfo(info);
    }

    return(
        <div>
            <SearchBox weatherInfo={weatherInfo}/>
            <br></br>
            <br></br>
            <InfoBox info={info}/>
        </div>
    );
}