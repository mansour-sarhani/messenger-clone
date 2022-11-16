import {createContext, useContext, useEffect, useState} from "react";
import io from 'socket.io-client'

const SocketContext = createContext()

export const useSocket = () => useContext(SocketContext)

export function SocketProvider({children, id}) {
    const [socket, setSocket] = useState(null);
    useEffect(() => {
        const newSocket = io(
            'http://localhost:5000',
            {query: {id}},
            { transports : ['websocket'] }
        )
        setSocket(newSocket)

        return () => newSocket.close()
    }, [id]);


    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
}
