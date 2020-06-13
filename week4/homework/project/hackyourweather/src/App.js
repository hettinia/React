import React from "react";
import "./App.css";
import HackWeather from "./components/HackWeather";
import WeatherChart from "./components/WeatherChart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hack Your Weather</h1>
        <Switch>
          <Route exact path="/" component={HackWeather} />
          <Route path="/:cityId" component={WeatherChart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
