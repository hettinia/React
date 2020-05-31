import React, { useEffect, useState } from 'react';
import Button from './GalleryButton';
import DogPhoto from './DogPhoto';

export default function DogGallery() {
    // create states
    const [dogPhotos, setDogPhotos] = useState([]);
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [fetched, setFetched] = useState(0); //this state will use as Dependency for useEffect

  // fetch data from API via useEffect
  useEffect( () => { 
    const getDogPhoto = async () => {
      const apiUrl = "https://dog.ceo/api/breeds/image/random";
      const res = await fetch(apiUrl);
      if (res.status !== 200) {
        setError(true);
        setIsLoading(false);
      } else {
        const data = await res.json();
        setDogPhotos([...dogPhotos, data.message]); 
        setIsLoading(false);
      }
    };
    getDogPhoto();
   }, [fetched]); 
  
    
  return (
      <div>
        {error && "Fetching error..."}
        {isLoading ? "Loading..."
        : !error && ( 
            <>
                <div>
                    <Button onClick={() => setFetched(fetched+1)} />
                </div>
                
                {dogPhotos.length === 0 ? 
                    ( <p>Get your first dog by clicking the button!</p>) 
                :   ( dogPhotos.map(dogPhotoUrl => <DogPhoto imgUrl={dogPhotoUrl} />))}
            </>) 
        }
      </div>
  );
}