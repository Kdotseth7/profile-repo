import React, {Component} from "react";
import { MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBCollapse} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from "react-scroll";
import './Navigation.css';
import homeIcon from './homeIcon.png';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
        };
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    render() {
        return(
            <div>
                <header>
                    <Router>
                        <MDBNavbar color="bg-primary" fixed="top" dark expand="md" scrolling transparent>
                            <Link to="home" smooth={true} spy={true} offset={-70} duration={1000}>
                                <img alt='home' src={homeIcon} className='dim home-icon-style'/>
                            </Link>
                            {!this.state.isWideEnough && <MDBNavbarToggler onClick={this.onClick} />}
                            <MDBCollapse isOpen={this.state.collapse} navbar>
                                <MDBNavbarNav left>
                                    <Link to="about-me" smooth={true} spy={true} offset={-70} duration={1000}>
                                        <p className='dim navigation-item-style'>About Me</p>
                                    </Link>
                                    <Link to="projects" smooth={true} spy={true} offset={-70} duration={1000}>
                                        <p className='dim navigation-item-style'>Projects</p>
                                    </Link>
                                    <Link to="work-experience" smooth={true} spy={true} offset={-70} duration={1000}>
                                        <p className='dim navigation-item-style'>Work Experience</p>
                                    </Link>
                                    <Link to="contact-me" smooth={true} spy={true} offset={-70} duration={1000}>
                                        <p className='dim navigation-item-style'>Contact Me</p>
                                    </Link>
                                </MDBNavbarNav>
                            </MDBCollapse>
                        </MDBNavbar>
                    </Router>
                </header>
            </div>
        )
    }
}

export default Navigation;