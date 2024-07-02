import React, {useState} from 'react';
import KeywordButton from "./KeywordButton";
import KeywordDropdownButton from "./KeywordDropdownButton";
import KeywordForm from "./KeywordForm";
import KeywordCheckbox from "./KeywordCheckbox";
import TableTemplate from "./TableTemplate";
import {useWebSocket} from "../context/WebSocketContext";
import DisplayKeywordValue from "./DisplayKeywordValue";
import KeywordToFCheckbox from "./KeywordToFCheckbox";

function EssentialFeatures(props) {
    const {requests} = useWebSocket();


    return (
        <div style={{ display: 'block', marginTop: '10px', fontSize:10}}>
            - request list -
            {requests.map((req, index) => (
                <p id={index}> {`${req.request_id} : ${req.errcode} - 
                    ${req.msg}`} </p>
            ))}

            {/*Here is some clarification on the variant and keyword props*/}
            {/*variant: primary:blue, secondary:grey, danger:red*/}
            {/*keyword: keyword*/}
            {/*label: what you want the button to say*/}
            {/*Can enter label, or just use keyword as label*/}
            <KeywordButton keyword={"pie.mixed"} variant={"secondary"} label={"Click Me"} />
            <KeywordButton keyword={"scalemon.AVAILABILITY"} variant={"danger"} />

            {/*Can enter label, or just use keyword as label*/}
            <KeywordForm keyword={"pie.MIXED"} />
            <KeywordForm label={"Enter MIXED data 2: "} keyword={"pie.MIXED"} />


            <KeywordDropdownButton keyword={'pie.STRING'} options={['option1', 'option2', 'option3']} />

            <KeywordToFCheckbox keyword={'pie.BOOLEAN'}/>



            ------------------------------------

            <DisplayKeywordValue keyword={'pie.SEQUENCE_MASK'}/>
            <DisplayKeywordValue keyword={'pie.MIXED'} />
            <DisplayKeywordValue keyword={'pie.STRING'}/>
            <DisplayKeywordValue keyword={'pie.BOOLEAN'} />

            ------------------------------------


            <KeywordDropdownButton label={"Make a selection"} keyword={"scalemon.AVAILABILITY"} options={['option1', 'option2', 'option3']} />
            <KeywordCheckbox label={'Make a selection'} keyword={'scalemon.HB_STATUS'} options={['option1', 'option2', 'option3']} />

            -------------------------------------



            {/*<TableTemplate rows={4} columns={4} />*/}


        </div>
    );
}

export default EssentialFeatures;