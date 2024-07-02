import React, {createContext, useState, useEffect, useCallback, useContext,} from "react";

const WebSocketContext = createContext(null);

export const WebSocketProvider = ({url, children}) => {
    const [messages, setMessages] = useState([]);
    const [ws, setWs] = useState(null);
    const [requests, setRequests] = useState([]);
    const [error, setError] = useState(null);
    const [reqIdCounter, setReqIdCounter] = useState(1);


    const closeConnection = useCallback(() => {
        if (ws) {
            ws.close();
        }
    }, [ws]);



    useEffect(() => {

        const wsClient = new WebSocket(url);

        wsClient.onopen = () => {
            // wsClient.send("-c&-jsonfragments&-prefix&-s&sca%");
            wsClient.send("-c&-jsonfragments&-prefix&-s&pie&!&slow&!&%timeout");

        };

        wsClient.onmessage = (message) => {
            //console.log(message);
            const parsedMessage = JSON.parse(message.data);


            // console.log(parsedMessage)
            console.log(`Received message: ${parsedMessage.key} : ${parsedMessage.value}`);

            if(parsedMessage.type && parsedMessage.request_id) {
                if(parsedMessage.errcode !== "SUCCESS"){
                    setError(parsedMessage.msg)
                    console.log(`request: ${parsedMessage.request_id}  error: ${parsedMessage.msg}`)
                }else(
                    console.log(`request: ${parsedMessage.request_id} was a ${parsedMessage.errcode}`)
                )
                setRequests((prevMessages) => [...prevMessages, parsedMessage]);

            }
                //console.log(requests.length)
            else if(parsedMessage.key && parsedMessage.value){
                setMessages((prevMessages) => {
                    // Check if parsedMessage is already in prevMessages
                    const existingMessage = prevMessages.find(msg => msg.key === parsedMessage.key);

                    if (existingMessage) {
                        // If the message already exists, update its value
                        return prevMessages.map(msg =>
                            msg.key === parsedMessage.key ? { ...msg, value: parsedMessage.value } : msg
                        );
                    } else {
                        // Otherwise, add the new message to the array
                        return [...prevMessages, parsedMessage];
                    }
                });

                //setMessages((prevMessages) => [...prevMessages, parsedMessage]);


                // setMessages((prevMessages) => ({
                //     ...prevMessages,
                //     [parsedMessage.key]: parsedMessage.value,
                // }));

                // messages[parsedMessage.key] = parsedMessage.value;
                //console.log(messages);
            }
        };
        wsClient.onclose = () => {
            console.log('Disconnected from the WebSocket server');
        };

        wsClient.onerror = (error) => {
            console.error(`WebSocket error: ${error}`);
        };

        setWs(wsClient);

        return () => {
            wsClient.close();
        }
    }, [url]);

    const sendMessage = useCallback((message) => {
        if(ws && ws.readyState === WebSocket.OPEN){
            message.request_id = reqIdCounter;
            setReqIdCounter(prevCounter => prevCounter + 1);
            // console.log(`sending: ${JSON.stringify(message)}`)
            ws.send(JSON.stringify(message));
        }else{
            console.error("WebSocket is not open")
        }
    }, [ws, reqIdCounter]);

    return (
        <WebSocketContext.Provider value={{messages, closeConnection, sendMessage, ws, requests, error}}>
            {children}
        </WebSocketContext.Provider>
);
}

export const useWebSocket = () => useContext(WebSocketContext);