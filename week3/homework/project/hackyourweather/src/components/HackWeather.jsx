import React, { useState } from "react";
import Search from "./Search";
import WeatherInfo from "./WeatherInfo";

export default function HackWeather() {
  // create states
  const [citiesWeather, setCitiesWeather] = useState([]);
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // API parameter key
  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

  // fetch data from API via useEffect
  const getWeatherInfo = () => {
    setIsLoading(true);
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setCitiesWeather([data, ...citiesWeather]);
      })
      .catch((error) => {
        setError(true);
        throw Error("Error: ", error);
      })
      .finally(setIsLoading(false));
  };

  // handle change on search box
  const handleChange = (event) => {
    const value = event.target.value;
    setCityName(value);
  };

  // handel submit from search form
  const handleSubmit = (event) => {
    event.preventDefault();
    getWeatherInfo();
  };

  // handel delete from weather info
  const handleDelete = (cityId) => {
    const newCitiesWeather = citiesWeather.filter((city) => city.id !== cityId);
    setCitiesWeather(newCitiesWeather);
  };

  return (
    <div>
      <Search
        onSubmit={handleSubmit}
        onChange={handleChange}
        cityName={cityName}
      />

      {error && <h2>City not found!!</h2>}
      {isLoading && <h2>Loading...</h2>}
      {!error &&
        !isLoading &&
        citiesWeather.map((cityWeather) => (
          <WeatherInfo
            key={cityWeather.id}
            id={cityWeather.id}
            info={cityWeather}
            onDelete={handleDelete}
          />
        ))}
    </div>
  );
}
