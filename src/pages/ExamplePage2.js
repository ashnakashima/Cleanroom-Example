import React, {useState} from 'react';
import KeywordButton from "../components/KeywordButton";
import KeywordDropdownButton from "../components/KeywordDropdownButton";
import KeywordForm from "../components/KeywordForm";
import KeywordCheckbox from "../components/KeywordCheckbox";
import {useWebSocket} from "../context/WebSocketContext";
import DisplayKeywordValue from "../components/DisplayKeywordValue";
import KeywordBoolCheckbox from "../components/KeywordBoolCheckbox";
import DataContainer2Cols from "../components/DataContainer2Cols";
import KeywordValueTable from "../components/KeywordValueTable";
import KeywordBoolSwitch from "../components/KeywordBoolSwitch";
import DataContainerCarousel from "../components/DataContainerCarousel";

function ExamplePage2(props) {

    const evenSmallerKeywordList = ["pie.SEQUENCE_STRING", "pie.SLOW", "pie.STRING", "pie.STUTTER", "pie.TIMED", "pie.UPTIME",
        "pie.VERSION", "pie.WRITE_TIMEOUT"]


    const carouselContents = [
        <DataContainer2Cols
            contentLeft={
                <>
                    <KeywordDropdownButton keyword={'pie.STRING'} options={['option1', 'option2', 'option3']} makeConfirm={true} />
                    <KeywordBoolCheckbox keyword={'pie.BOOLEAN'} makeConfirm={true}/>
                    <KeywordBoolSwitch keyword={'pie.BOOLEAN'} makeConfirm={true}/>
                    <KeywordCheckbox keyword={'pie.MIXED'} options={['fooC', 'pooC', 'vooC']} makeConfirm={true} />
                </>}
            contentRight={
                <>
                    <KeywordDropdownButton keyword={'pie.MIXED'} options={['option1', 'option2', 'option3']} makeConfirm={true} />
                    <DisplayKeywordValue keyword={'pie.MIXED'} />
                    <DisplayKeywordValue keyword={'pie.FAILURE'} />

                </>}
        />,
        <KeywordValueTable keywordList={evenSmallerKeywordList}/>
    ]

    return (
        <div style={{fontSize:10}}>

            <DataContainer2Cols
                header={'Experimenting Page'}
                contentTop={
                    <DataContainerCarousel header="CAROUSEL" contents={carouselContents}/>
                }
            />

        </div>
    );
}

export default ExamplePage2;