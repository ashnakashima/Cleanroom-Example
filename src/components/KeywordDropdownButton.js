import React, {useState} from 'react';
import {useWebSocket} from "../context/WebSocketContext";

function KeywordDropdownButton({label, keyword, options}) {

    const [selectedOption, setSelectedOption] = useState('');

    const {sendMessage} = useWebSocket();
    const handleSelectChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
        const message = { "type": "modify", "request_id": null, "key":{keyword}, "value":{value}};
        sendMessage(message);
    }

    return (
        <div style={{fontSize:10}}>
            <label>
                {label}
            <select
                style={{display:'block'}}
                onChange={handleSelectChange}
                id={keyword}
            >
                {options.map((value, index) => {
                    return(
                    <option key={index} value={value}>{value}</option>
                    )
                })}
            </select>
            </label>
            <span style={{display:'block'}}>You selected {selectedOption}</span>

        </div>
    );
}

export default KeywordDropdownButton;