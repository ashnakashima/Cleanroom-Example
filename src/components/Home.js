import React from 'react';
import Stages from "./Stages";
import Alarms from "./Alarms";
import {Col, Container, Row} from "react-bootstrap";
import Alarms2 from "./Alarms2";
import EssentialFeatures from "./EssentialFeatures";

function Home() {
    return (
        <div>
            <div className="d-flex flex-column">
                {/*<Alarms2 />*/}
                {/*<Stages/>*/}
                <EssentialFeatures />

            </div>
        </div>
    );
}

export default Home;