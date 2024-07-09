import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import EssentialFeatures from "./EssentialFeatures";
import Welcome from "./Welcome";

function Home() {
    return (
        <div>
            <Welcome/>
            <EssentialFeatures />
        </div>
    );
}

export default Home;