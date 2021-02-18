import React from 'react'


function Useritem(props) {
    
    return (
        <div>
            <div>
            <h2 >{props.user.first_name} {props.user.last_name}</h2>
            <p>{props.user.email}</p>
            <img src={props.user.avatar} alt={props.user.first_name}></img><br />
            <button>Delete</button>
            <button>Edit</button>
            <hr />
            </div>
        </div>
    )
}

export default Useritem