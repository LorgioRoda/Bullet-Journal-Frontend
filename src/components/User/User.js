import React from 'react'

export default function User({user}) {
    return (
        <div>
            <img src={user.profile_Background}/>
            <img src={user.photo}/>
            <h3>{user.username}</h3>
            <p>{user.description}</p>
        </div>
    )
}
