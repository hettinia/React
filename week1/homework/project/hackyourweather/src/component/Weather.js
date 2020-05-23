import React from 'react';

function Weather(props) {
  return (
    <div className='weather'>
      <h2>{props.cityName}, {props.countryName}</h2>
      <h3>{props.weatherMain}</h3>
      <h4>{props.weatherDesciption}</h4>
      <h4> min temp: {props.minTemprature} </h4>
      <h4> max temp: {props.maxTemprature} </h4>
      <h4>location: {props.longitude} , {props.lattitude}</h4>
    </div>
  );
}

export default Weather;