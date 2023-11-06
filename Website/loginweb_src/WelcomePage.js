import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

/*const WelcomePage = ({username, onLogout}) =>{
    return(
        <div>
            <h1>Welcome {username}!</h1>
            <Button variant = 'warning' onClick={onLogout}>
                Logout
            </Button>
        </div>
    );
};
export default WelcomePage;*/

export default function WelcomePage({username, onLogout}){
    return (
        <div>
            <h1>Welcome {username}!</h1>
            <Button variant = 'warning' onClick={onLogout}>
                Logout
            </Button>
        </div>
    );
};