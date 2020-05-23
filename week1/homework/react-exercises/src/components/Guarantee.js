import React from 'react';

function Guarantee (props) {
    return (
        <div className='guarantee-list'>
            <img src={props.img} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
       
    );
}

export default Guarantee;