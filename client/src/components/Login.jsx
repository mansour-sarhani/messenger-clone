import {Button, Container, Form} from "react-bootstrap";
import {useRef} from "react";
import { v4 as uuidv4 } from 'uuid';

function Login({onIdSubmit}) {
    const idRef = useRef();

    function handleSubmit(e) {
        e.preventDefault()
        onIdSubmit(idRef.current.value)
    }

    function createNewId() {
        onIdSubmit(uuidv4())
    }

    return (
        <Container className="align-items-center d-flex min-vh-100">
            <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group className="mb-3">
                    <Form.Label>Enter Your ID</Form.Label>
                    <Form.Control type="text" ref={idRef} required />
                </Form.Group>
                <Button type="submit" className="me-2">Login</Button>
                <Button onClick={createNewId} variant="secondary">Create a New ID</Button>
            </Form>
        </Container>
    );
}

export default Login;