import React from 'react';
import './CardCarousel.css';
import OwlCarousel from 'react-owl-carousel';
import Card from "../Card/Card";
import {projects} from "./CardsDataArray";

const CardCarousel = () => {
    return (
        <div className='center' style={{height: '850px', width: '800px', marginTop: '70px', marginBottom: '150px'}}>
            <h1 className='ml3 mb4 f1' style={{fontWeight: '500'}}>
                <span className='f4'>
                    SOME
                </span>
                <br/>
                Projects that I have
                <br/>
                <span className='f2'>
                    worked on
                </span>
            </h1>
            <OwlCarousel
                className="owl-theme"
                nav
                navText={['Prev', 'Next']}
                dots
                width={300}
                loop
                items={2}
                autoplay
            >
                {projects.map(project => {
                    return (
                        <div className="item">
                            <Card
                                image={project.image}
                                title={project.title}
                                technology={project.technology}
                                summary={project.summary}
                                githubLink={project.githubLink}
                                isResearchPaper={project.isResearchPaper}
                                researchPaper={project.researchPaper}
                                isWebsite={project.isWebsite}
                                website={project.website}
                            />
                        </div>
                    );
                })
                }
            </OwlCarousel>
        </div>
    )
};

export default CardCarousel;