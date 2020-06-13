import React, { useState } from "react";
import Search from "./Search";
import WeatherInfo from "./WeatherInfo";

export default function HackWeather() {
  // create states
  const [cityWeather, setCityWeather] = useState({});
  const [cityName, setCityName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // API parameter key
  const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;

  // fetch data from API

  const getWeatherInfo = () => {
    setIsLoading(true);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setCityWeather(data);
        setError("");
      })
      .catch((error) => {
        setIsLoading(false);
        setCityWeather({});
        setError("Something Wrong, ", error);
      });
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

  return (
    <div>
      <Search
        onSubmit={handleSubmit}
        onChange={handleChange}
        cityName={cityName}
      />

      {error && <h3 style={{ color: "red" }}>{error}</h3>}
      {isLoading && <h3 style={{ color: "green" }}>Loading...</h3>}
      {cityWeather.cod === 200 ? (
        <WeatherInfo key={cityWeather.id} info={cityWeather} />
      ) : (
        <h3>Enter City Name</h3>
      )}
    </div>
  );
}
