import React, {useState, useEffect} from 'react'
import UserList from './UserList';
import axios from 'axios'

const api = axios.create({
    baseURL: `https://reqres.in/api/users?`
})

function UserContainer() {

    useEffect(() => {
        fetchUsers();
    }, [])

    const [user, setUsers] = useState([])

    
    
    const fetchUsers = async () => {

        api.get('/').then(res => {
            setUsers(res.data.data)
            
        }) 
    }

    

    return (
        <div>
           <UserList 
                users={user} 

            />
        </div>
    )
}

export default UserContainer
