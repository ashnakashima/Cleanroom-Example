import React, {useEffect, useState} from 'react';
import {Button} from "react-bootstrap";
import {useWebSocket} from "../context/WebSocketContext";


function KeywordButton({keyword, variant, label, buttonValue, makeConfirm}) {

    const {sendMessage, reqIdCounter} = useWebSocket();


    const keyArray = keyword.split(".");
    let key = keyArray[1];

    const handleClick = () => {
        const userConfirmed = !makeConfirm || window.confirm(`Confirm ${key} button click`);
        if(userConfirmed){
            const message = { "type": "modify", "request_id": reqIdCounter, "key": keyword, "value": buttonValue};
            sendMessage(message);
        }

    }

    return (
        <div style={{margin:5}}>
            <Button
                style={{fontSize: 8, margin: 2}}
                variant={variant ? variant : "secondary"}
                id={`${keyword}-button`}
                size="sm"
                onClick={handleClick}
                type="button"
            >
                {label ? label : key }
            </Button>






        </div>
    );
}

export default KeywordButton;