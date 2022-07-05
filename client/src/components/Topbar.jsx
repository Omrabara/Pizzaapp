import React from 'react'
import { Nav, Navbar, Container, Button, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { MdLocalOffer } from 'react-icons/md'
import { logoutUser } from '../actions/Useraction'
const Topbar = () => {
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.cartReducer);
    const userState = useSelector(state => state.loginUserReducer);
    const { currentUser } = userState

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg" >
                <Container fluid>
                    <h4 className='text-light'>
                        <MdLocalOffer className='text-warning'></MdLocalOffer>&nbsp;&nbsp;Friend's Pizza
                    </h4>
                    <Nav className='ms-auto'>
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact">
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                        {
                            currentUser ? (<LinkContainer to="/">
                                {/* <Nav.Link>{currentUser.name}</Nav.Link> */}
                                <NavDropdown title={currentUser.name} id="basic-nav-dropdown">
                                    <LinkContainer to="/orders">
                                        <NavDropdown.Item >Order</NavDropdown.Item>

                                    </LinkContainer>
                                    <NavDropdown.Item
                                        onClick={() => { dispatch(logoutUser()) }}>Logout</NavDropdown.Item>

                                </NavDropdown>
                            </LinkContainer>) : (
                                <>
                                    <LinkContainer to="/login">
                                        <Nav.Link> <Button className='bg-warning text-dark' >Login </Button></Nav.Link>
                                    </LinkContainer>
                                    <LinkContainer to="/register">
                                        <Nav.Link> <Button className='bg-warning text-dark' >Register </Button></Nav.Link>
                                    </LinkContainer>
                                </>
                            )
                        }

                        <LinkContainer to="/cart">
                            <Nav.Link> <Button className='bg-warning text-dark'>Cart {cartState.cartItems.length}</Button></Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Topbar