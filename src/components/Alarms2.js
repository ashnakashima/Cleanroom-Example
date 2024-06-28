import React, {useEffect, useState} from 'react';
import {useWebSocket} from "../context/WebSocketContext";
import {NestedAccordion} from "./NestedAccordion";
import KeywordButton from "./KeywordButton";
import KeywordDropdownButton from "./KeywordDropdownButton";

function Alarms2(props) {
    // const {messages} = useWebSocket();
    // const [keywordData, setKeywordData] = useState([]);
    //
    // useEffect(() => {
    //     const messageData = {}
    //     messages.forEach(msg => {
    //         // setKeywordData(prevData => ({
    //         //     ...prevData,
    //         //     [msg.key] : msg.value
    //         // }));
    //         messageData[msg.key] = msg.value;
    //         const keyList = ['scalemon.AVAILABILITY'];
    //         const populatedKeywords = populateKeywords(keyList, messageData);
    //         setKeywordData(populatedKeywords);
    //     });
    // }, [messages]);
    //
    //
    // const populateChildren = (parentKey, messageData, prefix) => {
    //     const children = [];
    //     const memValue = messageData[parentKey + 'MEM'];
    //     if(memValue) {
    //         const childKeys = memValue.split(' ');
    //         childKeys.forEach(childKey => {
    //             const childKeyInfo = {
    //                 keyword: childKey,
    //                 REMkey: prefix + "." + childKey + 'REM',
    //                 STAkey: prefix + "." + childKey + 'STA',
    //                 MSGkey: prefix + "." + childKey + 'MSG',
    //                 MEMkey: prefix + "." + childKey + 'MEM',
    //                 REMvalue: messageData[prefix + "." + childKey + 'REM'] || '',
    //                 STAvalue: messageData[prefix + "." + childKey + 'STA'] || '',
    //                 MSGvalue: messageData[prefix + "." + childKey + 'MSG'] || '',
    //                 MEMvalue: messageData[prefix + "." + childKey + 'MEM'] || null,
    //                 children: populateChildren(prefix + '.' + childKey, messageData, prefix)
    //             };
    //
    //             children.push(childKeyInfo);
    //         });
    //     }
    //     return children;
    // }
    //
    // const populateKeywords = (keyList, messageData) => {
    //     return keyList.map(baseKey => {
    //         const keywordParts = baseKey.split('.');
    //         const keywordWithoutPrefix = keywordParts.length > 1 ? keywordParts[1] : baseKey;
    //         const prefix = keywordParts.length > 1 ? keywordParts[0] : baseKey;
    //
    //         const keywordInfo = {
    //             keyword: keywordWithoutPrefix,
    //             REMkey: baseKey + 'REM',
    //             STAkey: baseKey + 'STA',
    //             MSGkey: baseKey + 'MSG',
    //             MEMkey: baseKey + 'MEM',
    //             REMvalue: messageData[baseKey + 'REM'] || '',
    //             STAvalue: messageData[baseKey + 'STA'] || '',
    //             MSGvalue: messageData[baseKey + 'MSG'] || '',
    //             MEMvalue: messageData[baseKey + 'MEM'] || null,
    //             children: populateChildren(baseKey, messageData, prefix)
    //         };
    //         return keywordInfo;
    //     })
    // }
    //
    // const displayMessageData = () => {
    //     return (
    //         <div>
    //             {/*<pre>{JSON.stringify(keywordData, null, 2)}</pre>*/}
    //             <NestedAccordion keywordData={keywordData}/>
    //         </div>
    //     );
    // };

    return (
        <div className="card-bg w-100 border d-flex flex-column" style={{ padding: 10 }}>
            <span className='header'> Alarms Page </span>
            {/*{displayMessageData()}*/}
            {/* Your other JSX */}

        </div>

    );
}

export default Alarms2;
