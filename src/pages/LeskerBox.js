import React from 'react';
import DataContainer2Cols from "../components/DataContainer2Cols";
import KeywordHistoryPlot from "../components/KeywordHistoryPlot";
import DisplayKeywordValue from "../components/DisplayKeywordValue";
import KeywordValueTable from "../components/KeywordValueTable";
import Ticker from "../components/Ticker";

function LeskerBox(props) {
    const content2 =
        <DataContainer2Cols
            contentLeft={
                <KeywordValueTable
                    keywordList={['scagilent.T_101', 'scagilent.T_102', 'scagilent.T_103']}
                    includeRemarks={true} keywordLabelList={['T_101', 'T_102', 'T_103']}/>
            }
            contentRight={
                <KeywordValueTable
                    keywordList={['scagilent.T_104', 'scagilent.T_105', 'scagilent.T_106']}
                    includeRemarks={true} keywordLabelList={['T_104', 'T_105', 'T_106']}/>
            }
        />

    const content3 =
        <DataContainer2Cols
            contentLeft={
                <KeywordValueTable
                    keywordList={['scagilent.T_201', 'scagilent.T_202', 'scagilent.T_203']}
                    includeRemarks={true} keywordLabelList={['T_201', 'T_202', 'T_203']}/>
            }
            contentRight={
                <KeywordValueTable
                    keywordList={['scagilent.T_204', 'scagilent.T_205', 'scagilent.T_206']}
                    includeRemarks={true} keywordLabelList={['T_204', 'T_205', 'T_206']}/>
            }
        />

    const content1 =
        <DataContainer2Cols
            contentTop={
            <div className={'ticker'}>
                <DisplayKeywordValue keyword={'scagilent.DISP1STA'} label={'Dispatcher Status'}/>
                <Ticker keyword={'scagilent.DISP1CLK'}/>
            </div>}
            contentLeft={content2}
            contentRight={content3}
        />

    return (
        <DataContainer2Cols
            header={'Lesker Box'}
            contentTop={
                content1
            }
            contentBottom={
                <KeywordHistoryPlot url='wss://scaleserver.ucolick.org:8081/gshowd' serviceName='scagilent' keywords="K_BENCH_LR K_COLDHEAD K_CU_BLOCK K_GETTER K_L_BRACKET K_LDT_MOT
            K_LL_FRAME K_LWH_MOT K_RADSHIELD K_RIGHTFILTSET K_UL_FRAME" title='Lesker Box Temperatures'/>
            }
        />
    );
}

export default LeskerBox;