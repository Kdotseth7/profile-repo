import React, { Component } from 'react';
import './App.css';
import BgImage from "../components/BgImage/BgImage";
import "tachyons";
import CardCarousel from "../components/CardCarousel/CardCarousel";
import ContactForm from "../components/ContactForm/ContactForm";
import Footer from "../components/Footer/Footer";
import WorkExperience from "../components/WorkExperience/WorkExperience";

class App extends Component {

  render() {
    return (
        <div>
            <div id='home'>
                <BgImage/>
            </div>
            <div id='projects'>
                <CardCarousel/>
            </div>
            <WorkExperience/>
            <div id='contact-me'>
                <ContactForm/>
            </div>
            <Footer/>
        </div>
    );
  }
}

export default App;
