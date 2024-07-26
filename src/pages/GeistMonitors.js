import React from 'react';
import DataContainer2Cols from "../components/DataContainer2Cols";
import DisplayKeywordValue from "../components/DisplayKeywordValue";
import KeywordValueTable from "../components/KeywordValueTable";
import KeywordDropdownButton from "../components/KeywordDropdownButton";
import KeywordBoolSwitch from "../components/KeywordBoolSwitch";
import Ticker from "../components/Ticker";

function GeistMonitors(props) {
    const content1 =
        <>
            <DisplayKeywordValue keyword={'cleanroom.DISP2DEV'}/>
            <DisplayKeywordValue keyword={'cleanroom.SERIAL_A'} />
        </>

    const content2 =
        <>
            <div className={'ticker'}>
                <DisplayKeywordValue keyword={'cleanroom.DISP2STA'} label={'Dispatcher Status'}/>
                <Ticker keyword={'cleanroom.DISP2CLK'}/>
            </div>
            <DisplayKeywordValue keyword={'cleanroom.TEMPUNITS_A'} label={'Temperature Units'}/>
        </>

    const content3 =
        <DataContainer2Cols
            contentLeft={
            <>
                <b>Internal Sensor:</b>
                <KeywordValueTable keywordList={['cleanroom.INTRN_A_TEMP', 'cleanroom.INTRN_A_RH', 'cleanroom.INTRN_A_DEWP']} keywordLabelList={['Temp (deg)', 'RH (%)', 'Dewpoint (deg)']}/>
            </>}
            contentRight={
            <>
                <b>E-rack:</b>
                <KeywordValueTable keywordList={['cleanroom.THD1_A_TEMP', 'cleanroom.THD1_A_RH', 'cleanroom.THD1_A_DEWP', 'cleanroom.THD1_A_SER']} keywordLabelList={['Temp (deg)', 'RH (%)', 'Dewpoint (deg)', '']}/>

            </>
            }
        />

    const content4 =
        <>
            <DisplayKeywordValue keyword={'cleanroom.DISP3DEV'}/>
            <DisplayKeywordValue keyword={'cleanroom.SERIAL_B'} />
        </>

    const content5 =
        <>
            <div className={'ticker'}>
                <DisplayKeywordValue keyword={'cleanroom.DISP3STA'} label={'Dispatcher Status'}/>
                <Ticker keyword={'cleanroom.DISP3CLK'}/>
            </div>
            <DisplayKeywordValue keyword={'cleanroom.TEMPUNITS_A'} label={'Temperature Units'}/>
        </>

    const content6 =
        <DataContainer2Cols
            contentLeft={
                <>
                    <KeywordValueTable
                        title={'Internal Sensor'}
                        keywordList={['cleanroom.INTRN_B_TEMP', 'cleanroom.INTRN_B_RH', 'cleanroom.INTRN_B_DEWP']}
                        keywordLabelList={['Temp (deg)', 'RH (%)', 'Dewpoint (deg)']}/>
                    <KeywordValueTable
                        title={'Cleanroom-Postr'}
                        keywordList={['cleanroom.THD1_B_TEMP', 'cleanroom.THD1_B_RH', 'cleanroom.THD1_B_DEWP', 'cleanroom.THD1_B_SER']}
                        keywordLabelList={['Temp (deg)', 'RH (%)', 'Dewpoint (deg)']}/>
                    <KeywordValueTable
                        title={'Coldhead'}
                        keywordList={['cleanroom.THD2_B_TEMP', 'cleanroom.THD2_B_RH', 'cleanroom.THD2_B_DEWP', 'cleanroom.THD2_B_SER']}
                        keywordLabelList={['Temp (deg)', 'RH (%)', 'Dewpoint (deg)']}/>
                    <KeywordValueTable
                        title={'Fancoil'}
                        keywordList={['cleanroom.TMP1_B_TEMP', 'cleanroom.TMP1_B_SER']}
                        keywordLabelList={['Temp (deg)']}/>
                </>}
            contentRight={
                <DataContainer2Cols
                    header={' Compressor Enable '}
                    contentTop={
                        <div align='left' style={{padding: 5}}>
                            <KeywordDropdownButton
                                keyword={'scalepower.CMPRSR_RELAY'}
                                options={['On', 'Off']}
                                label={'RELAY POWER: '}/>
                            <KeywordDropdownButton
                                keyword={'cleanroom.RELAYSTATE_B'}
                                options={['De-energized', "Energized"]}
                                label={'RELAY CONTROL: '}/>
                        </div>
                    }
                />

            }
        />

    return (
        <DataContainer2Cols
            header={'Geist Monitors'}
            contentLeft={
            <DataContainer2Cols
                contentLeft={content1}
                contentRight={content2}
                contentBottom={content3}
                />
            }
            contentBottom={
                <DataContainer2Cols
                    contentLeft={content4}
                    contentRight={content5}
                    contentBottom={content6}
                />
            }

        />
    );
}

export default GeistMonitors;