import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Stages(props) {
    return (
        <div className="card-bg w-100 border d-flex flex-column " style={{padding: 10}}>
            <span className='header'> Stages </span>
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="card-bg w-100 border d-flex flex-column " style={{padding: 10, marginTop:10}}>
                            1 of 2
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="card-bg w-100 border d-flex flex-column " style={{padding: 10, marginTop:10}}>
                            2 of 2
                        </div>
                    </Col>
                </Row>
            </Container>


        </div>
    );
}

export default Stages;