import React from 'react';

export default function Joke(props) {
    
    return (
        <div>
            <p className='joke-content'>{props.joke.setup}</p>
            <p className='joke-content'>{props.joke.punchline}</p>
        </div>
    );
}