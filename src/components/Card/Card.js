import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol, MDBCardFooter } from 'mdbreact';
import gitHubLogo from './github.png';
import './Card.css';

const Card = ( { image, title, technology, summary, githubLink, isResearchPaper, researchPaper, isWebsite, website }) => {
    const summaryLines = summary.split(".");

    return (
        <MDBCol style={{ height: '300px' }}>
            <MDBCard>
                <MDBCardImage className="img-fluid"
                              src={image}
                              waves/>
                <MDBCardBody cascade className='text-center'>
                    <MDBCardTitle className='card-title'>
                        <strong>
                            {title}
                        </strong>
                    </MDBCardTitle>
                    <p className='font-weight-bolder blue-text'>
                        {technology}
                    </p>
                    <div className='summary card-text-style'>
                        <ul style={{listStyleType: 'square', textAlign: 'left'}}>
                            {
                                summaryLines.map((line, index) => {
                                    return(
                                        <li key={index} className='mb2'>{line}</li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </MDBCardBody>
                <MDBCardFooter>
                    <MDBCol md='12' className='d-flex justify-content-center'>
                        <a href={githubLink} className='px-2 fa-lg li-ic grow'>
                            <img src={gitHubLogo} alt='' style={{height: '30x', width: '25px'}} />
                        </a>
                    </MDBCol>
                    {isResearchPaper
                        ?<MDBCol md='12' className='d-flex justify-content-center'>
                            <a href={researchPaper} className='px-2 fa-lg li-ic mt3 grow'>
                                <p>Research Paper</p>
                            </a>
                        </MDBCol>
                        :false
                    }
                    {isWebsite
                        ?<MDBCol md='12' className='d-flex justify-content-center'>
                            <a href={website} className='px-2 fa-lg li-ic mt3 grow'>
                                <p>Website Link</p>
                            </a>
                        </MDBCol>
                        :false
                    }
                </MDBCardFooter>
            </MDBCard>
        </MDBCol>
    )
};

export default Card;