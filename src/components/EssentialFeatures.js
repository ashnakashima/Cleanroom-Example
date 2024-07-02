import React, {useState} from 'react';
import KeywordButton from "./KeywordButton";
import KeywordDropdownButton from "./KeywordDropdownButton";
import KeywordForm from "./KeywordForm";
import KeywordCheckbox from "./KeywordCheckbox";
import {useWebSocket} from "../context/WebSocketContext";
import DisplayKeywordValue from "./DisplayKeywordValue";
import KeywordToFCheckbox from "./KeywordToFCheckbox";
import DataContainer2Cols from "./DataContainer2Cols";
import KeywordValueTable from "./KeywordValueTable";

function EssentialFeatures(props) {
    const {requests} = useWebSocket();


    return (
        <div style={{fontSize:10}}>
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

            <KeywordCheckbox label={'Make a selection'} keyword={'scalemon.HB_STATUS'} options={['option1', 'option2', 'option3']} />

            -------------------------------------


            <DataContainer2Cols
                header={'CONTAINER1'}
                content1={<DisplayKeywordValue keyword={'pie.BOOLEAN'} /> }
                content2={<DisplayKeywordValue keyword={'pie.BOOLEAN'} /> }
            />
            <DataContainer2Cols
                header={'CONTAINER2'}
                content1={<KeywordValueTable keywordList={['pie.MIXED', 'pie.BOOLEAN', 'pie.STRING', 'pie.SEQUENCE_MASK']} />}
                content2={<KeywordValueTable keywordList={['pie.MIXED', 'pie.BOOLEAN', 'pie.STRING', 'pie.SEQUENCE_MASK']} />}
            />
            <DataContainer2Cols
                header={'container in a container'}
                content1={<DataContainer2Cols
                    header={'conatiner1'}
                    content1={<DisplayKeywordValue keyword={'pie.BOOLEAN'} /> }
                    content2={<DisplayKeywordValue keyword={'pie.BOOLEAN'} /> }
                />}
                content2={<DataContainer2Cols
                    header={'container2'}
                    content1={<KeywordValueTable keywordList={['pie.MIXED', 'pie.BOOLEAN', 'pie.STRING', 'pie.SEQUENCE_MASK']} />}
                    content2={<KeywordValueTable keywordList={['pie.MIXED', 'pie.BOOLEAN', 'pie.STRING', 'pie.SEQUENCE_MASK']} />}
                />}
            />





        </div>
    );
}

export default EssentialFeatures;