import React, {useEffect, useRef, useState} from "react";
import {PuffLoader} from "react-spinners";
import {useWebSocket1} from "../context/WebSocketProviders";

const Spinner = ({keyword}) => {
    const [loading, setLoading] = useState(false);
    const [lastMessage, setLastMessage] = useState('');

    const {messages} = useWebSocket1();

    useEffect(() => {
        messages.forEach((msg) => {
            if(msg.key === keyword && msg.value !== lastMessage){
                console.log('newmessage')
                setLoading(true);
                setLastMessage(msg.value)
            }
        })
    }, [messages])

    return (
        <div>
            {loading && <PuffLoader size={20} color="grey" />}
        </div>
    );
};

export default Spinner;