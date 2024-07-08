import React, {useEffect, useState} from 'react';
import {useWebSocket} from "../context/WebSocketContext";
import {Table} from "react-bootstrap";

function KeywordValueTable({ keywordList }) {
    const { messages } = useWebSocket();
    const [values, setValues] = useState({});

    useEffect(() => {
        const newValues = {};
        keywordList.forEach(keyword => {

            const message = messages.find(msg => msg.key === keyword);
            newValues[keyword] = message ? message.value : null;
        });
        setValues(newValues);
    }, [messages, keywordList]);

    return (
        <div className='key-value-table'>
            <Table bordered hover >
                <tbody>
                {keywordList.map(keyword => (
                    <tr key={keyword} >
                        <td style={{width:'35%'}}>{keyword}</td>
                        {values[keyword] !== null ?
                            <td> {values[keyword]} </td>
                            :
                            <td style={{backgroundColor:'pink'}}>ERROR: KEYWORD NOT VALID or VALUE is null</td>}
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}

export default KeywordValueTable;