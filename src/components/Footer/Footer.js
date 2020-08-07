import React from "react";
import './Footer.css';

const Footer = () => {
    return(
        <footer className="page-footer font-small darken-3" style={{backgroundColor: '#37324b'}}>

            <div className="container">

                <div className="row" style={{height: '13em'}}>
                    <div className="col-md-12 py-5">
                        <div className="mb-5 flex flex-center ml6">
                            <h1 className='footer-after' style={{fontWeight: '600', fontSize: '4em', color: '#a3a1ac', marginBottom: '2em'}}>
                                Kushagra
                                <br/>
                                <span style={{fontWeight: '400', color: '#fff', marginLeft: '1em'}}>Seth</span>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 py-5 ml4">
                        <div className="mb-5 flex flex-center">
                            {/*GitHub*/}
                            <a href="https://github.com/Kdotseth7/" className="grow fb-ic">
                                <i className="fab fa-github fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            {/*FaceBook*/}
                            <a href="https://www.facebook.com/kushagra.seth.9/" className="grow fb-ic">
                                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            {/*Twitter*/}
                            <a href="https://twitter.com/kdotseth27/" className="grow tw-ic">
                                <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            {/*LinkedIn*/}
                            <a href="https://www.linkedin.com/in/kushagra-seth/" className="grow li-ic">
                                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                            {/*InstaGram*/}
                            <a href="https://www.instagram.com/k.seth7/?hl=en/" className="grow ins-ic">
                                <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/*Copyright*/}
            <div className="footer-copyright flex flex-center py-3">© 2020 Copyright
                <a href="https://mdbootstrap.com/"> </a>
            </div>

        </footer>
    )
};

export default Footer;