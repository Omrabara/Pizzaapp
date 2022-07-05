import React,{useState} from 'react'
import { Nav, Navbar, Container, Button, Form } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import {registerUser} from '../actions/Useraction'
import Error from '../components/Error';
import Loader from '../components/Loader';
import Success from '../components/Success';
const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmpassword, setConfirmPassword] = useState('')

    const registerState =useSelector(state =>state.registerUserReducer)
    const {error,success,loading} = registerState

    const dispatch = useDispatch();
    const registerhandler = () =>{
        if (password !== confirmpassword) {
            alert('password does not match')
        }else{
            const user = {name,email,password,confirmpassword};
            dispatch(registerUser(user));
        }
    }
    return (
        <>
        <Container>
            {loading && <Loader/>}
            {success && <Success success="User Register Successfully!"/>}
            {error && <Error error="Somthing Went Wrong"/>}
            <h1>Registrastion</h1>
            <hr />
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                    placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" 
                    value={confirmpassword}
                    onChange={e=>setConfirmPassword(e.target.value)}
                    placeholder="Confim-Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button  className="bg-warning text-dark" variant="primary" onClick={registerhandler} >
                    Register
                </Button>
            </Form>
            </Container>
        </> 
    );
};

export default Register;