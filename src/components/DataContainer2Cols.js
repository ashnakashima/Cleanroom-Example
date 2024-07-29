import React from 'react';
import {Col , Row} from "react-bootstrap";

function DataContainer2Cols({header, contentTop, contentLeft, contentRight, contentBottom}) {
    const displayContent = () => {
        if(contentLeft && contentRight){
            return (
                <div style={{fontSize:10}}>
                    {contentTop}
                    <Row>
                        <Col>{contentLeft}</Col>
                        <Col> {contentRight}</Col>
                    </Row>
                    {contentBottom}
                </div>
            )
        }else{
            return (
                <div style={{fontSize:10}}>
                    {contentTop}
                    <Row>
                        <Col>{contentLeft}</Col>
                    </Row>
                    {contentBottom}
                </div>
            )
        }
    }

    return (
        <div className='card' style={{margin:5, padding:5}}>
            {header ? <div className='header'>{header} </div> : " "}
            {displayContent()}
        </div>
    );
}

export default DataContainer2Cols;