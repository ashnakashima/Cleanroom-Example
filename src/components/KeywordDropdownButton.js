import React, {useEffect, useState} from 'react';
import {useWebSocket1} from "../context/WebSocketProviders";

function KeywordDropdownButton({label, keyword, options, makeConfirm}) {
    const {sendMessage, messages} = useWebSocket1();


    const [selectedOption, setSelectedOption] = useState('');
    const [initialOption, setInitialOption] = useState('');

    useEffect(() => {
        const message = messages.find((msg) => msg.key === keyword);
        if(message){
            setInitialOption(message.value);
            setSelectedOption(message.value);
        }
    }, [keyword, messages]);


    const keyArray = keyword.split(".");
    let key = keyArray[1];
    const handleSelectChange = (e) => {
        const value = e.target.value;
        const userConfirmed = !makeConfirm || window.confirm(`Confirm dropdown selection ${value} for ${key}: `);
        if(userConfirmed){
            setSelectedOption(value);
            const message = { "type": "modify", "request_id": null, "key":keyword, "value":value};
            sendMessage(message);
        }
    }

    return (
        <div  style={{fontSize:10, display:'block', margin:3}}>
            <label>
                {label ? label : `${key}: ` }
            <select
                // style={{display:'block'}}
                onChange={handleSelectChange}
                id={`${keyword}-dropdown`}
                value={selectedOption}
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