import React from 'react';

export default function DogPhoto(props) {

    return <img className='dog-img' src={props.imgUrl} alt="dog"/>;

}