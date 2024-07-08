import React from 'react';
import KeywordButton from "./KeywordButton";
import KeywordForm from "./KeywordForm";
import KeywordDropdownButton from "./KeywordDropdownButton";
import KeywordToFCheckbox from "./KeywordToFCheckbox";
import DataContainer2Cols from "./DataContainer2Cols";

function Alarms2(props) {

    const content1 =
        <>
                {/*Here is some clarification on the variant and keyword props*/}
                {/*variant: primary:blue, secondary:grey, danger:red*/}
                {/*keyword: keyword*/}
                {/*label: what you want the button to say*/}
                {/*Can enter label, or just use keyword as label*/}
            <KeywordButton keyword={"pie.mixed"} variant={"secondary"} label={"Updates pie.MIXED"} buttonValue={"foo-button-update"} />

            <KeywordButton keyword={"scalemon.AVAILABILITY"} variant={"danger"} buttonValue={'doesntwork'} />

                {/*Can enter label, or just use keyword as label*/}



            <KeywordToFCheckbox keyword={'pie.BOOLEAN'}/>
        </>

    return (
        <div style={{fontSize:10}}>
            <DataContainer2Cols header={'Alarms'} contentTop={content1} />



        </div>

    );
}

export default Alarms2;
