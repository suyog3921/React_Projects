import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import "./SearchBox.css";

export default function SearchBox({updateInfo}) {
    let[city, setCity] = useState("");
    let[error, setError]= useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY= "7e39779b8ef30caf833e683418e5bf57";

    let getWeatherInfo = async ()=>{
    try{
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
       let jsonResponse = await response.json();
       console.log(jsonResponse);

       let result = {
        city:city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
       };
       console.log(result);
       return result;
    }catch(error){
        setError(true);
             
    }
    };

   

    let handleChange = (evt)=> {
        setCity(evt.target.value);
    };

    let handleSubmit = async(evt) =>{
        evt.preventDefault();
        console.log(city);
        setCity("");
        let newInfo = await getWeatherInfo();
        updateInfo(newInfo);
    }
  return (
    <div className="SearchBox">
      <h3>Search for the weather</h3>
      <form onSubmit={handleSubmit}>
        <TextField id="city" label="CityName" variant="outlined" required value={city} onChange={handleChange} fullWidth/>
        <br /><br />
        <Button variant="contained" type="submit" fullWidth>
          Search
        </Button>
        {error && <p>NO Such place exist</p>}
      </form>
    </div>
  );
}
