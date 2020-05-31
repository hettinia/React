import React from 'react';

export default function WeatherInfo(props) {
  const cityName = props.info.city.name;
  const countryName = props.info.city.sys.country;
  const weatherMain = props.info.city.weather[0].main;
  const weatherDesciption = props.info.city.weather[0].description;
  const minTemprature = props.info.city.main.temp_min;
  const maxTemprature = props.info.city.main.temp_max;
  const longitude = props.info.city.coord.lon;
  const lattitude = props.info.city.coord.lat;
  
  return (
    <div className='weather-box'>
      <h2>{cityName}, {countryName}</h2>
      <h3>{weatherMain}</h3>
      <h4>{weatherDesciption}</h4>
      <h4> min temp: {minTemprature} </h4>
      <h4> max temp: {maxTemprature} </h4>
      <h4>location: {longitude} , {lattitude}</h4>
    </div>
  );
}
