import React from 'react';
import './App.css';
import Search from './component/Search';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>Weather</h1>
          <Search/>
      </header>
    </div>
  );
}