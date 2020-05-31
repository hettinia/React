import React from 'react';
import './App.css';
import Friend from './components/Friend';
import DogGallery from './components/DogGallery';
import RandomJoke from './components/RandomJoke';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Friend/>  
        <DogGallery/>
        <h2>Day's Joke</h2>
        <RandomJoke/>
      </header>
    </div>
  );
}

