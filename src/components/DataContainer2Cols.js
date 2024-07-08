import React from 'react';
import {Col , Row} from "react-bootstrap";

function DataContainer2Cols({header, contentTop, contentLeft, contentRight, contentBottom}) {
    const displayContent = () => {
        if(contentLeft && contentRight){
            return (
                <>
                    {contentTop}
                    <Row>
                        <Col>{contentLeft}</Col>
                        <Col> {contentRight}</Col>
                    </Row>
                    {contentBottom}
                </>
            )
        }else{
            return (
                <>
                    {contentTop}
                    <Row>
                        <Col>{contentLeft}</Col>
                    </Row>
                    {contentBottom}
                </>
            )
        }
    }

    return (
        <div className='card' style={{margin:10, padding:5}}>
            {header ? <div className='header'>{header} </div> : " "}
            {displayContent()}
        </div>
    );
}

export default DataContainer2Cols;