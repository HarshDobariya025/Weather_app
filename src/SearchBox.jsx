import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ weatherInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);

  let API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let API_key = "dd3220051151be59c10cdba21de1ec58";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_key}&units=metric`
      );
      let json = await response.json();
      console.log(json);
      let result = {
        city: json.name,
        temp: json.main.temp,
        tempMin: json.main.temp_min,
        tempMax: json.main.temp_max,
        humidity: json.main.humidity,
        pressure: json.main.pressure,
        feelsLike: json.main.feels_like,
        windSpeed: json.wind.speed,
        weather: json.weather[0].description,
        seaLevel: json.main.sea_level,
        grounLevel: json.main.grnd_level,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      console.log(city);
      setCity("");
      let newWeatherInfo = await getWeatherInfo();
      weatherInfo(newWeatherInfo);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="SearchBox">
      <h3>Weather Report</h3>
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="Submit">
          Search
        </Button>
      </form>
      {error && <p style={{ color: "red" }}>No search record found.</p>}
    </div>
  );
}
