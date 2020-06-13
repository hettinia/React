import React from "react";
import { Link } from "react-router-dom";

export default function WeatherInfo(props) {
  const cityName = props.info.name;
  const countryName = props.info.sys.country;
  const weatherMain = props.info.weather[0].main;
  const weatherDesciption = props.info.weather[0].description;
  const minTemprature = props.info.main.temp_min;
  const maxTemprature = props.info.main.temp_max;
  const longitude = props.info.coord.lon;
  const lattitude = props.info.coord.lat;

  return (
    <Link to={`/${props.info.id}`}>
      <div className="weather-box">
        <h2>
          {cityName}, {countryName}
        </h2>
        <h3>
          {weatherMain} {weatherDesciption}
        </h3>
        <h4> min temp: {minTemprature} </h4>
        <h4> max temp: {maxTemprature} </h4>
        <h4>
          location: {longitude} , {lattitude}
        </h4>
      </div>
    </Link>
  );
}
