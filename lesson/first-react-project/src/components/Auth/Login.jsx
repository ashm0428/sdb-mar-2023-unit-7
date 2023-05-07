import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const Login = (props) => {
    const [email, setEmail] = useState("test1@test.com");
    const [password, setPassword] = useState("password1234");
    //BrowserRouter Hook
    const navigate = useNavigate();

async function handleSubmit(e) {
    e.preventDefault();
    let url = `http://localhost:4000/user/login`;
    let bodyObject = {
        email: email,
        password: password,
    };

    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const requestOptions ={
        headers: myHeaders,
        method: "POST",
        body: JSON.stringify(bodyObject),
    };

    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        console.log(data);
        if(data.message === "passwords matched") {
            props.updateToken(data.token);
            navigate("/driver-log");
        }
        
    } catch (error) {
        console.error(error.message);
    };
}

    return ( 
        <>
        <h2 className='text-center'>Hello from Login</h2>
        <Form onSubmit={handleSubmit}>
            {/* Start of Email */}
            <FormGroup>
                <Label>Email: </Label>
                <Input value={email} required onChange={(e) => setEmail(e.target.value)}/>
            </FormGroup>
            {/* Start of Password */}
            <FormGroup>
                <Label>Password: </Label>
                <Input value={password} required onChange={(e) => setPassword(e.target.value)}/>
            </FormGroup>
            {/* Button */}
            <div className='d-grid gap-2 mb-4'>
            <Button type='submit' color='danger'>Login
            </Button>
            </div>
        </Form>
        </>
     );
}
 
export default Login;