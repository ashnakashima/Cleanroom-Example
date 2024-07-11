import Carousel from 'react-bootstrap/Carousel';
import React from "react";

function DataContainerCarousel({header, contents, requests}) {
    return (
        <div className='card' style={{margin: 10, padding: 5}}>

            {header ? <div className='header'>{header} </div> : " "}
            <Carousel style={{padding:10, overflow:"scroll"}} slide={false} >
                {contents.map((content, index) => (
                    <Carousel.Item key={index} style={{padding: 10}}>
                        {content}
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>

    );
}

export default DataContainerCarousel;