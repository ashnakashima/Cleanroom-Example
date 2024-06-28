import React from 'react';
import {useWebSocket} from "../context/WebSocketContext";

function DisplayKeywordValue({keyword}) {
    const {messages} = useWebSocket();
    const getKeywordValue = () => {
        return messages[keyword] || "no value found"
    }
    return (
        <>
            {getKeywordValue()}
        </>
    );
}

export default DisplayKeywordValue;