import React from 'react'
import {Navbar, Container } from 'react-bootstrap';

export default function NavbarComp() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                    Markdown Preview
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    )
}
