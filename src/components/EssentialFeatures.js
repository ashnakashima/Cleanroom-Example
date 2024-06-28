import React, {useState} from 'react';
import KeywordButton from "./KeywordButton";
import KeywordDropdownButton from "./KeywordDropdownButton";
import KeywordForm from "./KeywordForm";
import KeywordCheckbox from "./KeywordCheckbox";
import TableTemplate from "./TableTemplate";
import {useWebSocket} from "../context/WebSocketContext";

function EssentialFeatures(props) {
    const {requests} = useWebSocket();


    return (
        <div style={{ display: 'block', marginTop: '10px' }}>
            {/*Here is some clarification on the variant and keyword props*/}
            {/*variant: primary:blue, secondary:grey, danger:red*/}
            {/*keyword: keyword*/}
            {/*label: what you want the button to say*/}
            {requests.map((req, index) => (
                <p id={index}> {req.request_id}
                    {req.errcode} </p>
            ))}
            <KeywordButton keyword={"scalemon.AVAILABILTY"} variant={"secondary"} label={"Click Me"} />
            <KeywordButton keyword={"scalemon.CLEANROOM"} variant={"danger"} label={"Click Me 2"} />

            <KeywordDropdownButton label={"Make a selection"} keyword={"scalemon.AVAILABILITY"} options={['option1', 'option2', 'option3']} />

            <KeywordForm label={"Enter data:"} keyword={"scalemon.HEARTBEATS"} />

            <KeywordCheckbox label={'Make a selection'} keyword={'scalemon.HB_STATUS'} options={['option1', 'option2', 'option3']} />

            {/*<TableTemplate rows={4} columns={4} />*/}




        </div>
    );
}

export default EssentialFeatures;