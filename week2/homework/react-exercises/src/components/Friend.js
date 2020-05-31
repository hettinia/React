import React, { useEffect, useState } from 'react';
import Button from './FriendButton';
import FriendProfile from './FriendProfile';

export default function Friend() {
    // create states
    const [friend, setFriend] = useState({});
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [fetched, setFetched] = useState(0); //this state will use as Dependency for useEffect

  // fetch data from API via useEffect
  useEffect( () => { 
    const getFriend = async () => {
      const apiUrl = "https://www.randomuser.me/api?results=1";
      const res = await fetch(apiUrl);
      if (res.status !== 200) {
        setError(true);
        setIsLoading(false);
      } else {
        const data = await res.json();
        setIsLoading(false);
        setFriend(data.results[0]); 
      }
    };
    getFriend();
   }, [fetched]); 
  
    
  return (
      <div>
        {error && "Fetching error..."}
        {isLoading ? "Loading..."
        : !error && ( <>
              <Button onClick={() => setFetched(fetched+1)} />
              { friend.name && <FriendProfile friend={friend} />}
            </>
          )
        }
      </div>
  );
}