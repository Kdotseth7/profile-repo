import React from "react";
import './WorkExperience.css';
import {cardsDataArray} from './WorkExCardsDataArray';
import WorkExperienceCard from "../WorkExperienceCard/WorkExperienceCard";
import resume from './Kushagra_Seth_Resume.pdf';
import AboutMe from "../AboutMe/AboutMe";
import { MDBBtn } from "mdbreact";


const WorkExperience = () => {
    return(
        <div className="jumbotron text-center mdb-color darken-2 white-text mx-2 mb-5">
            <div id='about-me'>
                <AboutMe/>
            </div>

            <div id={'work-experience'}>
                <h2 className="card-title h2" style={{fontWeight: '700', fontSize: '2.5em'}}>Work Experience</h2>
                <p className="my-4" style={{fontWeight: '400', fontSize: '1.5em'}}>PROFESSIONAL PATH</p>

                <div className='flex flex-center'>
                    {/*CARD DECK*/}
                    <div className="card-deck w-80">
                        {
                            /*CARDS*/
                            cardsDataArray.map(cardData => {
                                return(
                                    <WorkExperienceCard
                                        cardImage={cardData.cardImage}
                                        imgLink={cardData.imgLink}
                                        cardText={cardData.cardText}
                                        tenure={cardData.tenure}
                                        position={cardData.position}/>
                                );
                            })
                        }
                    </div>
                </div>

                <hr className="my-4 rgba-white-light" />
                <div className="pt-2 grow">
                    <a href={resume}>
                        <MDBBtn color='secondary'>Download Resume
                            <i className="far fa-gem ml-1"></i>
                        </MDBBtn>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default WorkExperience;