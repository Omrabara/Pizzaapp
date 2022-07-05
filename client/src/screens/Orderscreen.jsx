 import React,{useEffect} from 'react'
 import { Row,Col } from 'react-bootstrap'
 import{getUserOrders}from '../actions/Orderaction'
 import { useDispatch,useSelector } from 'react-redux'
 import Error from '../components/Error';
import Loader from '../components/Loader';
 const Orderscreen = () => {
    const orderstate = useSelector(state=>state.getUserOrderReducer);
    const {loading ,error,orders}=orderstate;
    const dispatch=useDispatch();
    useEffect(()=>{
          dispatch(getUserOrders());
    },[dispatch]);
   return (
     <>
     <h1>Your Orders</h1>
      {loading && <Loader/>}
      {error && <Error error="Somthing Went Wrong"/>}
      {
        orders && orders.map(order=>(
            <div className='container border p-4 bg-light'>
            <Row>
                <Col md={4}>
                    <h4>Items:</h4>
                   {order.orderitems.map(item=>(
                        <h6>{item.name}[{item.varient}]*{item.quantity}= {item.price}</h6>
                    ))}
                </Col>
                <Col md={4}>
                    <h4>Address</h4>
                    <h6>Street:{order.shippingAddress.street}</h6>
                    <h6>City:{order.shippingAddress.city}</h6>
                    <h6>pincode:{order.shippingAddress.pincode}</h6>
                    <h6>Country:{order.shippingAddress.country}</h6>
                </Col>
                <Col md={4}>
                    <h4>Order info</h4>
                    <h6>Order Amount:{order.orderAmount}</h6>
                </Col>
            </Row>
            </div>
        ))
      }
     
        
    </>
   );
 };
 
 export default Orderscreen;