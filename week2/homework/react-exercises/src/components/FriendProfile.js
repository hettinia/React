import React from 'react';


export default function FriendProfile(props) {
    
    return (
        <ul className='friend-list'>
            
            <li>
                First Name: {props.friend.name.first}
            </li>
            <li>
                Last Name: {props.friend.name.last}
            </li>
            <li>
                Address: {props.friend.location.city},  {props.friend.location.state}, {props.friend.location.postcode}
            </li>
            <li>
                Country: {props.friend.location.country}
            </li>
            <li>
                Email Address: {props.friend.email}
            </li>
            <li>
                Phone Number: {props.friend.phone}
            </li>
            
        </ul>
    );
    
}