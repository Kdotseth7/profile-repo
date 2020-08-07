import React from "react";
import "./SocialIcons.css";
import gitHubLogo from "./github.png";
import linkedInLogo from "./linkedin.png";
import instagramLogo from "./instagram.png";
import twitterLogo from "./twitter.png";
import faceBookLogo from "./facebook.png";

const SocialIcons = () => {
    return(
        <div style={{width: '100%'}}>
            <a href='https://github.com/Kdotseth7/'>
                <img className='socialIcons grow' src={gitHubLogo} alt='github'/>
            </a>
            <a href='https://www.linkedin.com/in/kushagra-seth/' className='grow'>
                <img className='socialIcons grow' src={linkedInLogo} alt='linkedIn'/>
            </a>
            <a href='https://www.instagram.com/k.seth7/?hl=en/' className='grow'>
                <img className='socialIcons grow' src={instagramLogo} alt='instagram'/>
            </a>
            <a href='https://twitter.com/kdotseth27/' className='grow'>
                <img className='socialIcons grow' src={twitterLogo} alt='twitter'/>
            </a>
            <a href='https://www.facebook.com/kushagra.seth.9/' className='grow'>
                <img  className='socialIcons grow' src={faceBookLogo} alt='facebook'/>
            </a>
        </div>
    );
};

export default SocialIcons;