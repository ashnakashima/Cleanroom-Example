import React, {useEffect} from 'react';
import {useState} from "react";
import {useWebSocket} from "../context/WebSocketContext";

function KeywordForm({keyword, label}) {
    const {sendMessage, messages} = useWebSocket();
    const defaultInput = "";
    const[bgColor, setBgColor] = useState("transparent");
    const [input, setInput] = useState("");
    const [initialInput, setInitialInput] = useState('');


    useEffect(() => {
        const message = messages.find((msg) => msg.key === keyword);
        if(message){
            setInitialInput(message.value);
        }
    }, [keyword, messages]);


    const handleInput = (e) => {
        setInput(e.target.value)
        console.log(`input: ${input}`)
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
        const message = { "type": "modify", "request_id": null, "key":keyword, "value":input};
        sendMessage(message);
        // put code for modifying here
    }

    const keyArray = keyword.split(".");
    let key = keyArray[1];

    return (
        <div style={{fontSize:10, margin:5}}>
            <form>
                <label id={keyword}> {label ? label : `${key}: ${initialInput} ` }
                    <input
                        id={keyword}
                        type="text"
                        value={input}
                        onChange={handleInput}
                        onKeyDown={handleKeyDown}
                        style={{
                            backgroundColor:bgColor,
                            width: '60px'}}
                    />
                </label>
            </form>

        </div>
    );
}

export default KeywordForm;