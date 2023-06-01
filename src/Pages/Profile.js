import axios from 'axios';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { Card } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Profile = () => {
    const { id } = useParams();
    const [user, setUser] = useState({})
    useEffect(() => {
        axios
            .get(`https://jsonplaceholder.typicode.com/users/?id=${id}`)
            .then((res) => setUser(res.data[0]))
            .catch((err) => console.error(err));
    });
    console.log("user", user);
    return (
        <div>
            <h2>User Profile</h2>
            <Card style={{ width: "18rem", margin:'2% 40%' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEMpUS3NxMp4i7QkSKNn40Oax_w-mLBFsoPA&usqp=CAU" />
                <Card.Body>
                    <Card.Title>{user.name}</Card.Title>
                    <Card.Text>{user.phone}</Card.Text>
                    <Button variant="info">
                        <Link to={`/users`}>Go Back</Link>
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Profile