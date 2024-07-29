import React from 'react';
import DisplayKeywordValue from "../components/DisplayKeywordValue";
import DataContainer2Cols from "../components/DataContainer2Cols";
import Ticker from "../components/Ticker";

function VacGauge(props) {
    const content1 =
        <>
            <div style={{display:"inline-flex"}}>
                <DisplayKeywordValue keyword={'scalevac.DISP1STA'} label={'Dispatcher Status'}/>
                <Ticker keyword={'scalevac.DISP1CLK'}/>
            </div>
            <DisplayKeywordValue keyword={'scalevac.STAT'} label={'AGC302 STATUS'} />
            <div style={{display:"inline-flex"}}>
                <DisplayKeywordValue keyword={'scalevac.PRES'} label={'Pressure'}/>
                <DisplayKeywordValue keyword={'scalevac.UNIT'}/>
            </div>

        </>
    return (
        <DataContainer2Cols
            header={'Vacuum Gauge'}
            contentLeft={<DataContainer2Cols contentLeft={<b>AGC302:</b>} contentRight={content1}/>}
            contentRight={<></>}
        >
        </DataContainer2Cols>
    );
}

export default VacGauge;