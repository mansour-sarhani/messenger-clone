import Sidebar from "./Sidebar";
import {useConversations} from "../context/ConversationsProvider";
import OpenConversation from "./OpenConversation";

function Dashboard({id}) {
    const {selectedConversation} = useConversations()

    return (
        <div className="d-flex vh-100">
            <Sidebar id={id} />
            {selectedConversation && <OpenConversation />}
        </div>
    );
}

export default Dashboard;