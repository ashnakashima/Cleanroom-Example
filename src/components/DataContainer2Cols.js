import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function DataContainer2Cols({header, content1, content2}) {
    const displayContent = () => {
        if(content2 && content1){
            return (
                <Container>
                    <Row>
                        <Col>{content1}</Col>
                        <Col> {content2}</Col>
                    </Row>
                </Container>
            )
        }else{
            return (
                <Container>
                    <Row>
                        <Col>{content1}</Col>
                    </Row>
                </Container>
            )
        }
    }

    return (
        <div className='card' style={{margin:10, padding:5}}>
            <h3 style={{backgroundColor:"lightgray"}}>{header ? header : " "}</h3>
            {displayContent()}
        </div>
    );
}

export default DataContainer2Cols;