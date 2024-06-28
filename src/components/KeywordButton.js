import React from 'react';
import {Button} from "react-bootstrap";
import {useWebSocket} from "../context/WebSocketContext";


function KeywordButton({keyword, variant, label}) {

    const {ws, sendMessage, messages, requests} = useWebSocket();

    const handleClick = () => {
        alert(`has been clicked`)
        const message = { "type": "modify", "request_id": null, "key": {keyword}, "value":"too"};
        sendMessage(message);
    }


    return (
        <>
            <Button
                style={{fontSize: 8, margin: 2}}
                variant={variant}
                id={keyword}
                size="sm"
                onClick={handleClick}
                type="button"
            >
                {label}
            </Button>


        </>
    );
}

export default KeywordButton;