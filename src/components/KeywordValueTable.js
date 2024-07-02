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
        <div style={{ fontSize: 10, margin: 5 }}>
            <Table bordered hover>
                <tbody>
                {keywordList.map(keyword => (
                    <tr key={keyword}>
                        <td style={{width:'40%'}}>{keyword}</td>
                        <td>{values[keyword] !== null ? values[keyword] : 'not found'}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}

export default KeywordValueTable;