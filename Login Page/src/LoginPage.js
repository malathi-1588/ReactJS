import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form} from 'react-bootstrap';
import { useState } from "react";
import WelcomePage from "./WelcomePage";

const LoginPage = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password)){
            alert('Password should contain at least 1 lowercase, 1 uppercase and 1 digit')
            return;
        }

        const users = [
            {username:'user1', password:'Pass1'},
            {username:'user2', password:'Pass2'}
        ];

        const matchedUser = users.find((user) => user.username===username && user.password===password);

        if (matchedUser){
            setAuthenticated(true);
        }
        else{
            alert('Invalid username or password');
        }
    };

    return (
        <div>
            {authenticated? (
                <WelcomePage username={username} onLogout={()=>setAuthenticated(false)}/>
            ):(
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="username">
                        <Form.Label>Username: </Form.Label>
                        <Form.Control 
                          type="text" 
                          value = {username}
                          onChange={(e)=>setUsername(e.target.value)}
                          required>
                          </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="password">
                        <Form.Label>Password: </Form.Label>
                        <Form.Control 
                          type="password" 
                          value = {password}
                          onChange={(e)=>setPassword(e.target.value)}
                          required>
                          </Form.Control>
                    </Form.Group>

                    <Button variant="success" type='submit'>
                        Login
                    </Button>
                </Form>
            )}
        </div>
    );
};
export default LoginPage;