import React from 'react';
import './App.css';
import HobbyList from './components/HobbyList';
import Guarantee from './components/Guarantee';
import Fdelivery from './f-delivery.png';
import Coin from './coin.png';
import Chat from './chat.png';
import Counter from './components/Counter';


function App() {
  const services = [
    {
      img: Fdelivery,
      title: "Free shipping",
      description: "Fusce urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vesti bulum mal esuada aliquet libero viverra cusus"
    },
    {
      img: Coin,
      title: "100% money back",
      description: "urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vest bulum mal esuada aliquet libero viverra cursus."
    },
    {
      img: Chat,
      title: "Online support 24/7",
      description: "urna quam, euismod sit amet mollis quis, vestibulum quis velit. Vest bulum mal esuada aliquet libero viverra cursus."
    }
  ];

  return (
    <div className="App">
      <header className="App-header">
        {/* Exercises 1: Extreme hobbies */}
        <h2>EX1: Extreme hobbies</h2>
        <HobbyList/>   

        {/* Exercise 2: Perfect customer service! */}
        <h2>EX2: Perfect customer service!</h2>
        <div>
        {services.map( (service, index) => (
           <Guarantee key={index} img={service.img} title={service.title} description={service.description}/>
          ))}
        </div>
          

        {/* Exercise 3: It's higher than 10! */}
        <h2>EX3: The Counter</h2>
        <Counter/>
      </header>
    </div>
  );
}

export default App;
