import React from 'react';
import {useState} from "react";
import {useWebSocket} from "../context/WebSocketContext";

function KeywordForm({keyword, label}) {
    const {sendMessage} = useWebSocket();

    const [input, setInput] = useState("Default");
    const defaultInput = "Default";
    const[bgColor, setBgColor] = useState("transparent");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`You entered: "${input}" for keyword:${keyword}`)
    }

    const handleInput = (e) => {
        setInput(e.target.value)
        setBgColor(e.target.value ? "pink" : "transparent");
    }

    // On enter -> window prompts user confirmation
    // if user not confirm, reverts input back to default
    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            e.preventDefault();
            const userConfirmed = window.confirm('Are you sure you want to adjust data?');
            if(userConfirmed) {
                performAction();
            }else{
                setBgColor('transparent');
                setInput(defaultInput);
            }
        }
    }

    const performAction = () => {
        setBgColor('transparent');
        const message = { "type": "modify", "request_id": null, "key":{keyword}, "value":{input}};
        sendMessage(message);
        // put code for modifying here
    }
    return (
        <div style={{fontSize:10}}>
            <form>
                <label id={keyword}> {label}
                    <input
                        id={keyword}
                        type="text"
                        value={input}
                        onChange={handleInput}
                        onKeyDown={handleKeyDown}
                        style={{
                            backgroundColor:bgColor,
                            width: '70px'
                    }}
                    />
                </label>
            </form>
        </div>
    );
}

export default KeywordForm;