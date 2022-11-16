import {Button, Form, Modal} from "react-bootstrap";
import {useRef} from "react";
import {useContacts} from "../context/ContactsProvider";

function NewContactModal({closeModal}) {
    const idRef = useRef();
    const nameRef = useRef();

    const {createContact} = useContacts()

    function handleSubmit(e) {
        e.preventDefault()
        createContact(idRef.current.value, nameRef.current.value)
        closeModal()
    }

    return (
        <>
            <Modal.Header closeButton>
                Create Contact
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="text" ref={idRef} required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" ref={nameRef} required />
                    </Form.Group>
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </>
    );
}

export default NewContactModal;