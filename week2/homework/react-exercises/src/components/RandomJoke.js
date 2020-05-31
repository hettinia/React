import React, { useEffect, useState } from 'react';
import Joke from './Joke';

export default function RandomJoke() {
    // create states
    const [joke, setjoke] = useState({});
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // fetch data from API via useEffect
  useEffect( () => { 
    const getJoke = async () => {
      const apiUrl = "https://official-joke-api.appspot.com/random_joke";
      const res = await fetch(apiUrl);
      if (res.status !== 200) {
        setError(true);
        setIsLoading(true);
      } else {
        const data = await res.json();
        setjoke(data); 
        setIsLoading(false);
      }
    };
    getJoke();
   }, []); 

  return (
    <div>
      {error && "Fetching error..."}
      {isLoading ? "Loading..."
      : !error && ( 
          <>
              <Joke joke={joke} />
          </>
        ) 
      }
    </div>
    );
}