import React from 'react'
import { Container, Row, Col ,Button} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, deleteFromcart } from '../actions/Cartaction'
import { FiMinusCircle } from 'react-icons/fi'
import { FiPlusCircle } from 'react-icons/fi'
import {BiRupee} from 'react-icons/bi'
import {MdRemoveShoppingCart} from 'react-icons/md'
import Checkout from '../components/Checkout'
const Cartscreen = () => {
    const cartState = useSelector(state => state.cartReducer);
    const cartItems = cartState.cartItems;

    const dispatch = useDispatch();
    const subtotal = cartItems.reduce((x,item) => x + item.price,0);

    return (
        <>
            <Container>
                <Row>
                    <Col md={6}>
                        <h1 className='text-danger'>MY-CART</h1>
                        <hr />
                        <Row>
                            {
                                cartItems.map(item => (
                                    <>
                                        <Col md={7}>
                                            <h5>{item.name} [{item.varient}]</h5>
                                            <h6>Price: {item.quantity} x {item.prices[0][item.varient]}={item.price}</h6>
                                            <h6>Quantity:&nbsp;
                                                <FiMinusCircle
                                                    style={{ cursor: 'pointer' }}
                                                    className='text-danger'
                                                    onClick={() => {
                                                        dispatch(
                                                            addToCart(item, item.quantity - 1, item.varient)
                                                        );
                                                    }}
                                                />&nbsp;
                                                {item.quantity}&nbsp;
                                                <FiPlusCircle
                                                    className='text-danger'
                                                    style={{ cursor: 'pointer' }}
                                                    onClick={() => {
                                                        dispatch(
                                                            addToCart(item, item.quantity + 1, item.varient)
                                                        );
                                                    }}
                                                />
                                            </h6>
                                        </Col>
                                        <Col md={5}>
                                            <img alt={item.name} src={item.image} style={{ width: "100px", height: "100px" }} />
                                            <MdRemoveShoppingCart 
                                                className='text-danger'
                                                style={{ cursor: 'pointer', marginLeft:'20px' }}
                                                onClick={() => {
                                                    dispatch(
                                                        deleteFromcart(item)
                                                    );
                                                }}
                                            />
                                        </Col>
                                        <hr />
                                    </>
                                ))
                            }
                        </Row>
                    </Col>
                    <Col md={4}>
                        <h1>PAYMENT INFO</h1>
                        <hr />
                        <h4>Subtotal :</h4>
                        <h4>  {subtotal}<BiRupee/></h4>
                        <Checkout subtotal={subtotal}/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Cartscreen;