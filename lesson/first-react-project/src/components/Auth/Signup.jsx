import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
// FirstName LastName Email Password
const Signup = (props) => {
    // UseState Variables ON Top
    const [firstName, setFirstName] = useState("Joe");
    const [lastName, setLastName] = useState("Tester");
    const [email, setEmail] = useState("test1@test.com");
    const [password, setPassword] = useState("password1234");
    const navigate = useNavigate();

    //Functions Here
async function handleSubmit(e) {
    e.preventDefault();
    let url = `http://localhost:4000/user/signup`;
    let bodyObject = {
        firstname: firstName,
        lastname: lastName,
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
        if(data.message === "works from signup") {
            props.updateToken(data.token);
            navigate("/driver-log");
        }
    } catch (error) {
        console.error(error.message);
    };
}

    return ( 
        <>  
        <h2 className="text-center">Hello from Signup</h2>
        <Form onSubmit={handleSubmit}>
            {/* Start of FirstName */}
            <FormGroup>
                <Label>First Name: </Label>
                <Input value={firstName} required onChange={(e) => setFirstName(e.target.value)}/>
            </FormGroup>
            {/* Start of lastName */}
            <FormGroup>
                <Label>Last Name: </Label>
                <Input value={lastName} required onChange={(e) => setLastName(e.target.value)}/>
            </FormGroup>
            {/* Start of email */}
            <FormGroup>
                <Label>Email: </Label>
                <Input value={email} required type='email' onChange={(e) => setEmail(e.target.value)}/>
            </FormGroup>
            {/* Start of password */}
            <FormGroup>
                <Label>Password: </Label>
                <Input value={password} required type='password' onChange={(e) => setPassword(e.target.value)}/>
            </FormGroup>
            {/* Button */}
            <div className='d-grid gap-2 mb-4'>
            <Button type='submit' color='danger'>Sign Up
            </Button>
            </div>
        </Form>
        </>
     );
}
 
export default Signup;