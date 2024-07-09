import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ExamplePage from "./ExamplePage";
import DataContainer2Cols from "../components/DataContainer2Cols";
import '../App.css';

function Home() {
    const welcomeTop =
        <div style={{display:"block"}}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img className="teleSpin" src="https://cdn-icons-png.flaticon.com/512/196/196689.png" alt="telescope icon" style={{width:200, height:200, margin:20}}/>
            <p> Edit src/pages/Home.js and save to reload. </p>
        </div>

    return (
        <div>
            <div>
                <DataContainer2Cols header={'WELCOME TO YOUR OWN REACT-WEBKTL PAGE'} contentTop={welcomeTop}/>
            </div>
        </div>
    );
}

export default Home;