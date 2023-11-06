import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

function Click(props){
    return(
        <Button variant={props.var} type={props.type} onClick={props.func}>
            {props.name}
        </Button>
    );
}
export default Click;