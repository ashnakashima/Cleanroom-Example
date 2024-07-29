import React, { useState, useEffect } from 'react';
import {useWebSocket1} from "../context/WebSocketProviders";

const getTickerMark = (value) => {
    switch (value) {
        case '\\':
            return '|';  // en-dash
        case '|':
            return '/';
        case '/':
            return '-';
        case '-':
            return '\\';
        default:
            return value;
    }
};

const Ticker = ({ keyword }) => {
    const [currentValue, setCurrentValue] = useState('/'); // Initialize with default value
    const {messages} = useWebSocket1();
    const [messageCount, setMessageCount] = useState(0);
    const [lastMessage, setLastMessage] = useState('');

    useEffect(() => {
        messages.forEach((msg) => {
            if(msg.key === keyword && msg.value !== lastMessage){
                setCurrentValue(getTickerMark(currentValue));
                setLastMessage(msg.value)

            }

        })
    }, [messages])

    return (
        <div id={'ticker'}>
            {currentValue}
        </div>
    );
};

export default Ticker;