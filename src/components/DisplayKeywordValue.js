import React, {useEffect, useState} from 'react';
import {useWebSocket} from "../context/WebSocketContext";

function DisplayKeywordValue({keyword}) {
    const {messages} = useWebSocket();
    const [value, setValue] = useState(null);

    useEffect(() => {
        // console.log(`length : ${Object.keys(messages).length}`)
        messages.forEach(msg => {
            if(msg.key === keyword){
                setValue(msg.value);
            }
        })

        // console.log(`keyword value: ${messages[keyword]}`)
        // console.log(`messages: ${messages[0].value}`)
        // if(messages[keyword] !== undefined){
        //     setValue(messages[keyword]);
        // }
    }, [messages, keyword])



    return (
        <div style={{fontSize:10, margin:5}}>
            {value !== null ? (
                    <p>{`${keyword} : ${value}`}</p>
                ) : (
                    <p> {`notfound`}</p>
                )
            }
        </div>
    );
}

export default DisplayKeywordValue;