import React, {useEffect, useState} from 'react';
import {useWebSocket} from "../context/WebSocketContext";

function KeywordToFCheckbox({keyword, label}) {
    const {sendMessage, messages} = useWebSocket();
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        const message = messages.find((msg) => msg.key === keyword);
        if (message) {
            setIsChecked(message.value === 'True');
        } else {
            setIsChecked(false); // Default to false if message is not found
        }
    }, [messages, keyword]);


    const handleChecked = () => {
        const newChecked = !isChecked
        setIsChecked(newChecked);
        // setAcutalChecked(!actualChecked);
        const message = { "type": "modify", "request_id": null, "key":keyword, "value":newChecked ? 'True' : 'False'};
        sendMessage(message);
    }

    const displayBox = () => (
        <input
            type="checkbox"
            onChange={handleChecked}
            checked={isChecked}
        />
    );


    const keyArray = keyword.split(".");
    let key = keyArray[1];


    return (
        <div style={{fontSize: 10, margin:5}}>
            <label>
            {label ? label : `${key}: `}
                {displayBox()}
            </label>
        </div>
    );
}

export default KeywordToFCheckbox;
