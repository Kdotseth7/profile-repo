import React from "react";
import './BgImage.css';
import Intro from "../Intro/Intro";
import Navigation from "../Navigation/Navigation";

const BgImage = () => {
    return(
        <div className='img-background' style={{margin: '0'}}>
            <Navigation/>
            <Intro/>
        </div>
    );
};

export default BgImage;