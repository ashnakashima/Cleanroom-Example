import React, {useCallback, useEffect} from 'react';
import {useState} from "react";
import {useWebSocket} from "../context/WebSocketContext";
import LoadingSpinner from "./LoadingSpinner";

function KeywordForm({keyword, label, makeConfirm}) {
    const {sendMessage, messages, reqIdCounter, requests} = useWebSocket();
    const defaultInput = "";
    const[bgColor, setBgColor] = useState("transparent");
    const [input, setInput] = useState("");
    const [initialInput, setInitialInput] = useState('');
    const [innerRequests, setInnerRequests] = useState([]);


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
            const userConfirmed = !makeConfirm || window.confirm(`Are you sure you want to adjust data?`);
            if(userConfirmed) {
                performAction();
            }else{
                setBgColor('transparent');
                setInput(defaultInput);
            }
        }
    }

    const performAction = useCallback(() => {
        setBgColor('transparent');
        const message = { "type": "modify", "request_id": reqIdCounter, "key":keyword, "value":input};
        sendMessage(message);
        setInnerRequests((prevState) => [...prevState, {id: reqIdCounter}]);
        // put code for modifying here
    }, [input, keyword, reqIdCounter, sendMessage])

    const keyArray = keyword.split(".");
    let key = keyArray[1];



    return (
        <div style={{fontSize:10, margin:5}}>
            <form>
                <label id={`${keyword}-input`}> {label ? label : `${key}: ${initialInput} ` }
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