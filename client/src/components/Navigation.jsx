import React from 'react'
import { Navbar, Nav, Container,Image } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand >
                        <Image src='images/logo.png' alt='logo' style={{height:'50px'}}></Image>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation