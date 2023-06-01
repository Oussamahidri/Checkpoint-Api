import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from './UserCard'

const UserListe = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((res) => setUsers(res.data))
            .catch((err) => console.log(err))
    }, [])
    
    return (
        <div>
            <h1>Users List </h1>
            <div className="userList"> 
            {users.map((el) => (
                <UserCard user={el} key={el.id} />
            ))}
            </div>

        </div>
    )
}

export default UserListe