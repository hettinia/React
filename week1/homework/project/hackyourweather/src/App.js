import React from 'react';
import './App.css';
import Cities from './city-weather.json';
import Weather from './component/Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Weather</h1>
          {
            Cities.map( city => {
              return (
                <Weather 
                key={city.id}
                cityName={city.name}
                countryName={city.sys.country}
                weatherMain={city.weather[0].main}
                weatherDesciption={city.weather[0].description}
                maxTemprature={city.main.temp_max}
                minTemprature={city.main.temp_min}
                longitude={city.coord.lon}
                lattitude={city.coord.lat}
              />
              );
              
            })
          }
      </header>
    </div>
  );
}

export default App;
