import React,{useState,useEffect} from 'react'
import { Nav, Navbar, Container, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {loginUser} from '../actions/Useraction'
import {RiLoginBoxFill} from 'react-icons/ri'
const Login = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const dispatch = useDispatch();

  useEffect(()=>{
      if (localStorage.getItem('currentUser')) {
        window.location.href = "/"
      }
  },[])
  const loginHandler = () =>{
    const user ={email,password}
    dispatch(loginUser(user))
  }
  return (
    <>
     <Container>
       <h1 ><RiLoginBoxFill /> Login</h1>
       <hr />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          type="email" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="bg-warning text-dark" 
        variant="primary" 
        
        onClick={loginHandler}>
          Login
        </Button>
      </Form>
      </Container>
    </>
  )
}

export default Login