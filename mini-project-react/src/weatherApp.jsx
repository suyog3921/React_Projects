import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp(){
    const[weatherInfo, setWeatherInfo]=useState({
        city:"Nashik",
        feelsLike: 294.24,
        humidity: 48,
        temp: 294.77,
        tempMax: 294.77,
        tempMin: 294.77,
        weather: "overcast clouds"
    });

    let updateInfo=(newInfo)=>{
     setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign : "center"}}>
            <h2>WeatherApp by Suyog</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}></InfoBox>
        </div>
    )
}