import {useEffect, useState} from "react";
import {useWebSocket} from "../context/WebSocketContext";
import {Accordion, Card, Col, Container, Row} from "react-bootstrap";


export function NestedAccordion(props) {
    // useEffect(() => {
    //     //console.log(messages);
    //     props.keywordData.forEach(msg => {
    //         const span = document.getElementById(msg.key);
    //         if(span){
    //             span.innerText = msg.value;
    //             if (msg.value === 'NOTICE') {
    //                 span.style.backgroundColor = 'yellow'; // or any color you want for notice
    //             } else if(msg.value === 'ERROR'){
    //                 span.style.backgroundColor = "red"
    //             } else if(msg.value === 'DISABLED'){
    //                 span.style.backgroundColor = "orange"
    //             }else if(msg.value === 'WARNING'){
    //                 span.style.backgroundColor = "purple"
    //             }else{
    //                 span.style.backgroundColor = 'transparent'; // reset if not notice
    //             }
    //         }
    //     })
    // }, [props.keywordData]);

    //console.log(props);
    const [flag, setFlag] = useState(false);


    return (
        <div>
            {props.keywordData.map((parent) => (
                <div key={parent.keyword}>
                    <div>
                        <span>
                            {parent.keyword} - {parent.STAvalue}
                        </span>
                        {parent.children.length > 0 && (
                            <span onClick={() => setFlag(!flag)}>
                                {flag ? '   -' : '   +'}
                            </span>
                        )}
                    </div>
                    {flag && parent.children.length > 0 && parent.children.map((child, index) => (
                        <pre>{JSON.stringify(child, null, 2)}</pre>
                        //console.log(`${index} childdata:  ${child.keyword} ${child.STAvalue}`)
                        //<NestedAccordion keywordData={child} />
                    ))}
                </div>
            ))}
        </div>

    );
}

//////////////


// import React, { useState } from 'react';
//
// function NestedAccordion({ keywordData }) {
//     const [expandedParents, setExpandedParents] = useState([]);
//
//     const toggleParent = (parentKey) => {
//         if (expandedParents.includes(parentKey)) {
//             setExpandedParents(expandedParents.filter((key) => key !== parentKey));
//         } else {
//             setExpandedParents([...expandedParents, parentKey]);
//         }
//     };
//
//     const isParentExpanded = (parentKey) => expandedParents.includes(parentKey);
//
//     const renderChildren = (children) => {
//         return (
//             <table>
//                 <thead>
//                 <tr>
//                     <th>Keyword</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {children.map((child) => (
//                     <tr key={child.keyword}>
//                         <td>{child.keyword}</td>
//                         {child.children && child.children.length > 0 && (
//                             <tr>
//                                 <td colSpan="1">{renderChildren(child.children)}</td>
//                             </tr>
//                         )}
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         );
//     };
//
//     const renderParent = (parent) => {
//         return (
//             <div key={parent.keyword}>
//                 <div onClick={() => toggleParent(parent.keyword)} style={{ cursor: 'pointer' }}>
//                     {parent.keyword} {isParentExpanded(parent.keyword) ? '-' : '+'}
//                 </div>
//                 {isParentExpanded(parent.keyword) && parent.children && parent.children.length > 0 && renderChildren(parent.children)}
//             </div>
//         );
//     };
//
//     return (
//         <div>
//             {keywordData.map((parent) => renderParent(parent))}
//         </div>
//     );
// }
//
// export default NestedAccordion;