import React, { Component } from "react";
import { MDBIcon, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import './ContactForm.css';
import ConfirmationPopUp from "../ConfirmationPopUp/ConfirmationPopUp";
import error from './error.png';

const initialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
    nameError: '',
    emailError: '',
    subjectError: '',
    messageError: '',
    errorIcon: false,
    modal: false
};

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    onNameChange = event => {
        this.setState({name: event.target.value});
    };

    onEmailChange = event => {
        this.setState({email: event.target.value});
    };

    onSubjectChange = event => {
        this.setState({subject: event.target.value});
    };

    onMessageChange = event => {
        this.setState({message: event.target.value});
    };

    validation = () => {
        const { name, email, subject, message } = this.state;
        let nameError = '';
        let emailError = '';
        let subjectError = '';
        let messageError = '';

        // Name Validation
        if ( !name ) {
            nameError = 'Name cannot be empty';
        }

        if ( name.toString().length === 1 ) {
            nameError = 'Name should be greater than 1 character';
        }

        // Email Validation
        if ( !email.toString().includes('@') || !email.toString().includes('.') ) {
            emailError = 'Invalid Email format';
        }

        if ( !email ) {
            emailError = 'Email cannot be empty';
        }

        // Subject Validation
        if ( !subject ) {
            subjectError = 'Subject cannot be empty';
        }

        // Message Validation
        if ( !message ) {
            messageError = 'Message cannot be empty';
        }

        if ( nameError || emailError || subjectError || messageError) {
            this.setState(
                {
                    nameError,
                    emailError,
                    subjectError,
                    messageError,
                    errorIcon: true
                }
            );
            return false;
        }
        return true;
    };


    onSubmitClick = () => {
        const { name, email, subject, message } = this.state;
        const isValid = this.validation();
        if(isValid) {
            fetch("http://localhost:3050/people", {
                method: "post",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    name,
                    email,
                    subject,
                    message
                })
            })
                .then(response => response.json())
                .then(person => {
                        if(person.id) {
                            this.toggle();
                            this.setState({
                                name: '',
                                email: '',
                                subject: '',
                                message: '',
                                nameError: '',
                                emailError: '',
                                subjectError: '',
                                messageError: '',
                                errorIcon: false
                            })
                        }
                    }
                )
                .catch(console.error);
        }
    };

    toggle = () => {
        this.setState({modal: !this.state.modal});
    };

    render() {
        const {onNameChange, onEmailChange, onMessageChange, onSubjectChange , onSubmitClick} = this;
        const errorAlert =
            <div>
                <img alt='error-icon' className='error-icon' src={error}/>
                <p className='text-center' style={{marginLeft: '5px', fontSize: '1.8em'}}>ERROR</p>
            </div>;
        return (
            <div className='mb5'>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            <div className='shadow-5-l outline-transparent-l'>
                                <MDBCard>
                                    <MDBCardBody>
                                        <section className="col-md-10 center">

                                            <h2 className="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>

                                            <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to
                                                contact me directly. I will try to respond to you as soon as possible.</p>
                                            <div className="row form-element-css">
                                                <div className="col-md-9 mb-md-0 mb-5">
                                                    <div id="contact-form" name="contact-form">
                                                        {
                                                            this.state.errorIcon
                                                                ?errorAlert
                                                                :false
                                                        }
                                                        <div className="row">
                                                            <div className="col-md-6">
                                                                <div className="md-form mb-0">
                                                                    <input type="text"
                                                                           id="name"
                                                                           value={this.state.name}
                                                                           name="name"
                                                                           className="form-control"
                                                                           placeholder='Your name'
                                                                           onChange={onNameChange}
                                                                    />
                                                                    <div className='form-error-style'>
                                                                        {
                                                                            this.state.nameError
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <div className="md-form mb-0">
                                                                    <input type="email"
                                                                           id="email"
                                                                           value={this.state.email}
                                                                           name="email"
                                                                           className="form-control"
                                                                           placeholder='Your email'
                                                                           onChange={onEmailChange}
                                                                    />
                                                                    <div className='form-error-style'>
                                                                        {
                                                                            this.state.emailError
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="md-form mb-0">
                                                                    <input type="text"
                                                                           id="subject"
                                                                           value={this.state.subject}
                                                                           name="subject"
                                                                           className="form-control"
                                                                           placeholder='Subject'
                                                                           onChange={onSubjectChange}
                                                                    />
                                                                    <div className='form-error-style'>
                                                                        {
                                                                            this.state.subjectError
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="md-form">
                                                                    <textarea type="text"
                                                                              id="message"
                                                                              value={this.state.message}
                                                                              name="message"
                                                                              rows="4"
                                                                              className="form-control md-textarea"
                                                                              placeholder='Your message .....'
                                                                              onChange={onMessageChange}>
                                                                    </textarea>
                                                                    <div className='form-error-style'>
                                                                        {
                                                                            this.state.messageError
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-center py-4 mt-3">
                                                        <MDBContainer>
                                                            <MDBBtn color="secondary"
                                                                    className="grow"
                                                                    type="submit"
                                                                    onClick={onSubmitClick}>
                                                                SUBMIT
                                                                <MDBIcon far icon="paper-plane" className="ml-2" />
                                                            </MDBBtn>
                                                            <ConfirmationPopUp
                                                                toggle={this.toggle}
                                                                modal={this.state.modal}
                                                            />
                                                        </MDBContainer>
                                                    </div>
                                                </div>

                                                <div className="col-md-3 text-center">
                                                    <ul className="list-unstyled mb-0">
                                                        <li className='grow'><i className="fas fa-map-marker-alt fa-2x"></i>
                                                            <p>New Delhi, Delhi-110052, India</p>
                                                        </li>

                                                        <li className='grow'><i className="fas fa-phone mt-4 fa-2x"></i>
                                                            <p>+91-9650022646</p>
                                                        </li>

                                                        <li className='grow'><i className="fas fa-envelope mt-4 fa-2x"></i>
                                                            <p>kseth919@gmail.com</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                        </section>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default ContactForm;