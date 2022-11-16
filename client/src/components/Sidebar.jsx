import {Button, Modal, Nav, NavItem, NavLink, Tab} from "react-bootstrap";
import {useState} from "react";
import Conversations from "./Conversations";
import Contacts from "./Contacts";
import NewConversationModal from "./NewConversationModal";
import NewContactModal from "./NewContactModal";

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

function Sidebar({id}) {
    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY);
    const [modalOpen, setModalOpen] = useState(false);
    const conversationsOpen = activeKey === CONVERSATIONS_KEY
    
    function closeModal() {
        setModalOpen(false)
    }

    return (
        <div style={{width: '250px'}} className="d-flex flex-column">
            <Tab.Container activeKey={activeKey} onSelect={setActiveKey}>
                <Nav variant="tabs" className="justify-content-center">
                    <NavItem>
                        <NavLink eventKey={CONVERSATIONS_KEY}>Conversations</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink eventKey={CONTACTS_KEY}>Contacts</NavLink>
                    </NavItem>
                </Nav>
                <Tab.Content className="border-end overflow-auto flex-grow-1">
                    <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                        <Conversations />
                    </Tab.Pane>
                    <Tab.Pane eventKey={CONTACTS_KEY}>
                        <Contacts />
                    </Tab.Pane>
                </Tab.Content>
                <div className="p-2 border-top border-end small">
                    Your ID: <span className="text-muted">{id}</span>
                </div>
                <Button onClick={() => setModalOpen(true)} className="rounded-0">
                    New {conversationsOpen ? 'Conversation' : 'Contact'}
                </Button>
            </Tab.Container>
            <Modal show={modalOpen} onHide={closeModal}>
                {conversationsOpen ?
                    <NewConversationModal closeModal={closeModal} />
                    :
                    <NewContactModal closeModal={closeModal} />
                }
            </Modal>
        </div>
    );
}

export default Sidebar;