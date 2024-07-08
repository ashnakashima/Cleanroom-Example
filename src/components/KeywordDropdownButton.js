import React, {useEffect, useState} from 'react';
import {useWebSocket} from "../context/WebSocketContext";

function KeywordDropdownButton({label, keyword, options}) {
    const {sendMessage, messages} = useWebSocket();


    const [selectedOption, setSelectedOption] = useState('');
    const [initialOption, setInitialOption] = useState('');

    useEffect(() => {
        const message = messages.find((msg) => msg.key === keyword);
        if(message){
            setInitialOption(message.value);
        }
    }, [keyword, messages]);

    const handleSelectChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
        const message = { "type": "modify", "request_id": null, "key":keyword, "value":value};
        sendMessage(message);
    }

    const keyArray = keyword.split(".");
    let key = keyArray[1];

    return (
        <div  style={{fontSize:10, display:'block', margin:3}}>
            <label>
                {label ? label : `${key}: ` }
            <select
                // style={{display:'block'}}
                onChange={handleSelectChange}
                id={keyword}
                value={initialOption}
            >
                {options.map((value, index) => {
                    return(
                    <option key={index} value={value} >{value}</option>
                    )
                })}
            </select>
            </label>

        </div>
    );
}

export default KeywordDropdownButton;