import React from 'react';
import Hobbies from './Hobbies';

function HobbyList() {

    const hobbies = ['Surfing', 'Rock climbing', 'Mountain biking', 'Breakdancing'];
    return (
        <ul className="hobbies-list">
            {hobbies.map( (hobby, index) => (
                <Hobbies key={index} hobby={hobby} />
            ))}
        </ul>
        
    );
}

export default HobbyList;