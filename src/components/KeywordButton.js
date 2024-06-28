import React, {useState} from 'react';
import {Button, Spinner} from "react-bootstrap";
import {useWebSocket} from "../context/WebSocketContext";


function KeywordButton({keyword, variant, label}) {

    const {ws, sendMessage, messages} = useWebSocket();
    const [isLoading, setIsLoading] = useState(false);



    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1000);
        const message = { "type": "modify", "request_id": null, "key": keyword, "value":"foo2"};
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
                {!isLoading ? label : <Spinner animation="border" variant="primary" size="sm"/>}
            </Button>





        </>
    );
}

export default KeywordButton;