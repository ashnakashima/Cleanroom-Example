// import React, {useEffect, useState} from 'react';
// import {NestedAccordion} from "./NestedAccordion";
// import {useWebSocket} from "../context/WebSocketContext";
// import {Container} from "react-bootstrap";
//
// function Alarms() {
//     const {messages} = useWebSocket();
//
//     useEffect(() => {
//         //console.log(messages);
//         messages.forEach(msg => {
//             const span = document.getElementById(msg.key);
//             if(span){
//                 span.innerText = msg.value;
//                 if (msg.value === 'NOTICE') {
//                     span.style.backgroundColor = 'yellow'; // or any color you want for notice
//                 } else if(msg.value === 'ERROR'){
//                     span.style.backgroundColor = "red"
//                 } else if(msg.value === 'DISABLED'){
//                     span.style.backgroundColor = "orange"
//                 }else if(msg.value === 'WARNING'){
//                     span.style.backgroundColor = "purple"
//                 }else{
//                     span.style.backgroundColor = 'transparent'; // reset if not notice
//                 }
//             }
//         })
//     }, [messages]);
//
//     //////////
//
//     const data = {
//         id: 1,
//         pid: null,
//         children: [
//             {
//                 id: 2,
//                 pid: 1,
//                 children: [{ id: 4, pid: 2, children: [{ id: 6, pid: 4 }] }]
//             },
//             { id: 3, pid: 1, children: [{ id: 5, pid: 3 }] }
//         ]
//     };
//
//     ////////
//
//     let keyList = ['scalemon.AVAILABILITY', 'scalemon.CLEANROOM'];
//
//     const kwdInfo = (kwds) => {
//         let newKwds = [];
//         const processKwd = (key) => {
//             const keywordParts = key.split('.');
//             const keywordWithoutPrefix = keywordParts.length > 1 ? keywordParts[1] : key;
//             const prefix = keywordParts.length > 1 ? keywordParts[0] : key;
//
//
//             const children = messages[key + 'MEM'] ? messages[key + 'MEM'].split(' ') : [];
//             //console.log(`Key: ${key}, Children: ${children.join(', ')}`);
//
//
//             const keywordInfo = {
//                 keyword: keywordWithoutPrefix,
//                 REMkey: key + 'REM',
//                 STAkey: key + 'STA',
//                 MSGkey: key + 'MSG',
//                 MEMkey: key + 'MEM',
//                 children: []
//             }
//
//             children.forEach(childKey => {
//                 //console.log('contains childrenn ------------')
//                 const childKeyWordInfo = processKwd(childKey);
//                 keywordInfo.children.push(childKeyWordInfo);
//                 //console.log(`childKeyWordInfo: ${childKeyWordInfo.keyword}`)
//             })
//             return keywordInfo;
//         }
//         kwds.forEach((key) => {
//             const keywordInfo = processKwd(key);
//             newKwds.push(keywordInfo);
//             //console.log(`newkeyinfo: ${keywordInfo.keyword}`)
//         })
//
//         //console.log(JSON.stringify(newKwds, null, 2))
//         return newKwds;
//     };
//
//
//     const displayKeywords = (keywords) => {
//         return keywords.map((item, index) => (
//             <tr key={index}>
//                 <td> {item.keyword} </td>
//                 <td id={item.REMkey}>  </td>
//                 <td id={item.STAkey}>  </td>
//                 <td id={item.MSGkey}> </td>
//                 {item.children &&  (
//                     <td id={item.MEMkey}></td>
//                 )}
//
//             </tr>
//         ));
//     };
//
//     const KeywordsDisplay = () => {
//         const keywords = kwdInfo(keyList);
//         return (
//             <div className='content' style={{padding: 20}}>
//                 <table className="table table-bordered table-hover" >
//                     <tbody>
//
//                     {displayKeywords(keywords)}
//                     </tbody>
//                 </table>
//             </div>
//
//         );
//     };
//
//     return (
//         <div className="card-bg w-100 border d-flex flex-column" style={{padding: 10}}>
//             <span className='header'> Alarms Page </span>
//             <KeywordsDisplay/>
//
//             <p> These are nested accordions used to display data within data. Dependent on how data flows in.
//                 <a
//                     href="https://codesandbox.io/s/nested-accordion-multi-level-react-qi1n6?file=/src/App.js"
//                     target="_blank" rel="noreferrer"> Check Out this source
//                     </a>
//                 </p>
//                 {/*<NestedAccordion kwdInfo={kwdInfo(keyList)}/>*/}
//
//         </div>
//     );
// }
//
// export default Alarms;