import React, {useEffect, useState} from 'react';
import {useWebSocket1} from "../context/WebSocketProviders";

function DisplayKeywordValue({keyword}) {
    const {messages} = useWebSocket1();
    const [value, setValue] = useState(null);

    useEffect(() => {
        // console.log(`length : ${Object.keys(messages).length}`)
        messages.forEach(msg => {
            if(msg.key === keyword){
                setValue(msg.value);
            }
        })
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