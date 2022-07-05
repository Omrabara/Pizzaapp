import React from 'react'
import{Button} from 'react-bootstrap'
import StripeCheckout from 'react-stripe-checkout'
import {useDispatch} from 'react-redux'
import {placeOrder} from '../actions/Orderaction'
const Checkout = ({subtotal}) => {
    const tokenHandler = (token) =>{
        dispatch(placeOrder(token,subtotal))
        console.log(token);
    };
    const dispatch = useDispatch();
    
  return (
    
        <StripeCheckout
        amount={subtotal * 100}
        shippingAddress
        token={tokenHandler}
        stripeKey="pk_test_51L9QCySCd2hh5JHgTnfJsdN4KI41cABukAjYJ4joPOQq3adTYiWJJlFXshCqx2fZLl4kDHvZuYZT7VQVMcMVJNA700hnW0g5vg"
        currency="INR"
        >
            <Button className='bg-warning text-dark'>Pay Now</Button>
        </StripeCheckout>
    
    );
};

export default Checkout;