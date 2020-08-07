import React from "react";

const WorkExperienceCard = ( {cardImage, imgLink, cardText, tenure, position} ) => {
    const cardTextLines = cardText.split(".");

    return(
        <div className="card mb-4 grow w-20">

            {/*CARD IMAGE*/}
            <div className="view overlay">
                <div className='bb b--blue bw2'>
                    <img className="card-img-top" src={cardImage}
                         alt="Card cap"/>
                </div>
                {/*CARD IMAGE LINK*/}
                <a href={imgLink}>
                    <div className="mask rgba-white-slight"></div>
                </a>
            </div>

            {/*CARD CONTENT*/}
            <div className="card-body">

                {/*CARD TEXT*/}
                <div className="card-text">
                    <p style={{fontSize: 'large'}}>
                        <span className='work-position'>
                            Position:
                        </span>
                        {position}
                    </p>
                    <p style={{fontSize: 'large'}}>
                        <span className='work-position'>
                            Tenure:
                        </span>
                        {tenure}
                    </p>
                    <br/>
                    <ul style={{listStyleType: "square", textAlign: "left"}}>
                        {
                            cardTextLines.map((line, index) => {
                                return(
                                    <li key={index} className='mb2'>
                                        {line}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

            </div>

        </div>
    )
};

export default WorkExperienceCard;