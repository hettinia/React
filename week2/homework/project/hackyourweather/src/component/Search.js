import React, { useState } from 'react';
import WeatherInfo from './WeatherInfo';

export default function Search() {

    // create states
    const [weatherInfo, setWeatherInfo] = useState({});
    const [cityName, setCityName] = useState('');
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    // API parameter key
    const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

    // fetch data from API via useEffect
    const getWeatherInfo = async (event) => {
      event.preventDefault();
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
      const res = await fetch(apiUrl);
      if (res.status !== 200) {
        setError(true);
        setIsLoading(false);
      } else {
        const data = await res.json();
        setWeatherInfo(data); 
        setIsLoading(false);
      }
    };
    
    // handle change on search box
   const handleChange = (event) => {  
       const value = event.target.value;
       setCityName(value);
    };

  return (
    <div>
      <form onSubmit={getWeatherInfo}>
        <input type='text' value={cityName} onChange={handleChange} className='search-input'></input>
        <button type='submit' className='search-btn'>Search</button>
      </form>
      {isLoading && "Loading..."}
      {error && !isLoading && "City not found !!"}
      {!isLoading && !error && weatherInfo.name && <WeatherInfo info={weatherInfo} />} 
    </div>
  );
}
