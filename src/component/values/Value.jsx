import React from 'react';
import "../../App.css"

function Values({user, onDelete}) {
    return (
        <div className="values">
            <div><p>name</p> <span>{user.name}</span></div>
            <div><p>username</p> <span>{user.username}</span></div>
            <div><p>email</p><span>{user.email}</span></div>
            <div><p>phone</p><span>{user.phone}</span></div>
            <div><p>website</p><span>{user.website}</span></div>
            <button onClick={onDelete}>delete user</button>
        </div>
    );
}

export default Values;
// <p>name: </p>
// <p>{user.name}</p>
// <p>lastname: {user.username}</p>
// <p>mail: {user.email}</p>
// <p>phone: {user.phone}</p>
// <p>website: {user.website}</p>
//