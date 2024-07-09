import React from 'react';
import KeywordButton from "../components/KeywordButton";
import KeywordForm from "../components/KeywordForm";
import KeywordDropdownButton from "../components/KeywordDropdownButton";
import KeywordToFCheckbox from "../components/KeywordToFCheckbox";
import DataContainer2Cols from "../components/DataContainer2Cols";

function Welcome(props) {
    const welcomeTop =
        <div style={{display:"block"}}>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
            <img src="https://i.pinimg.com/736x/db/d6/82/dbd6829334e6ae630e3f8420db5d3f40.jpg" alt="telescope icon" style={{width:200, height:200, margin:20}}/>
            <p> Edit src/pages/Home.js and save to reload. </p>
        </div>

    return (
        <div>
            <DataContainer2Cols header={'WELCOME TO YOUR OWN REACT-WEBKTL PAGE'} contentTop={welcomeTop}/>



        </div>

    );
}

export default Welcome;
