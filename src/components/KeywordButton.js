import React, {useEffect, useState} from 'react';
import {Button, Spinner} from "react-bootstrap";
import {useWebSocket} from "../context/WebSocketContext";
import DisplayKeywordValue from "./DisplayKeywordValue";


function KeywordButton({keyword, variant, label}) {

    const {ws, sendMessage, messages} = useWebSocket();
    const [isLoading, setIsLoading] = useState(false);
    const [value, setValue] = useState("");


    const handleClick = () => {
        setIsLoading(true);
        setTimeout(() => setIsLoading(false), 1000);
        const message = { "type": "modify", "request_id": null, "key": keyword, "value":"foo-updatewithbutton"};
        sendMessage(message);
    }

    const keyArray = keyword.split(".");
    let key = keyArray[1];

    return (
        <div style={{margin:5}}>
            <Button
                style={{fontSize: 8, margin: 2}}
                variant={variant}
                id={keyword}
                size="sm"
                onClick={handleClick}
                type="button"
            >
                {label ? label : key }
            </Button>
            {/*<DisplayKeywordValue keyword={'key'} />*/}






        </div>
    );
}

export default KeywordButton;