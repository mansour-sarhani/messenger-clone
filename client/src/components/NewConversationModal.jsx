import {Button, Form, Modal} from "react-bootstrap";
import {useContacts} from "../context/ContactsProvider";
import {useState} from "react";
import {useConversations} from "../context/ConversationsProvider";

function NewConversationModal({closeModal}) {
    const {contacts} = useContacts()
    const {createConversation} = useConversations()
    const [selectedContactIds, setSelectedContactIds] = useState([]);
    
    function handleCheckboxChange(contactId) {
        setSelectedContactIds(prevState => {
            if (prevState.includes(contactId)) {
                return prevState.filter(prevId => {
                    return contactId !== prevId
                })
            } else {
                return [...prevState, contactId]
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        createConversation(selectedContactIds)
        closeModal()
    }

    return (
        <>
            <Modal.Header closeButton>
                Create Conversation
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {contacts.map(contact => (
                        <Form.Group className="mb-3" controlId={contact.id} key={contact.id} >
                            <Form.Check
                                type="checkbox"
                                value={selectedContactIds.includes(contact.id)}
                                label={contact.name}
                                onChange={() => handleCheckboxChange(contact.id)}
                            />
                        </Form.Group>
                    ))}
                    <Button type="submit">Create</Button>
                </Form>
            </Modal.Body>
        </>
    );
}

export default NewConversationModal;