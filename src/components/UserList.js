import React from 'react'
import Useritem from './Useritem'

function UserList(props) {
    
    return (
        <div>
        {props.users.map(data => (
            <Useritem key={data.id}
                user={data}
            />
            
        ))}
        </div> 
    )
}

export default UserList