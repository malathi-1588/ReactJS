import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form} from 'react-bootstrap';

function InputField(props) {
    return(
        <Form>
            <Form.Group controlId={props.id}>
            <Form.Label>{props.content}</Form.Label>
            <Form.Control 
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.func}
            required
            />
            </Form.Group>
        </Form>
    );
}

export default InputField;