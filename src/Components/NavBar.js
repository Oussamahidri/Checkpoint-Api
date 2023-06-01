import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

const NavBar = () => {
    return (
        <header>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="/">Company Name</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/users">Users</Nav.Link>
                <Nav.Link href="/admin">Admin</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default NavBar