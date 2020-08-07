import React from 'react';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

const ConfirmationPopUp = ( {toggle, modal} ) => {
    return (
        <MDBModal isOpen={modal} toggle={toggle} centered>
            <MDBModalHeader toggle={toggle}>
                Confirmation Action
            </MDBModalHeader>
            <MDBModalBody>
                Your message has been submitted.
            </MDBModalBody>
            <MDBModalFooter>
                <MDBBtn color="secondary"
                        onClick={toggle}>
                    Close
                </MDBBtn>
            </MDBModalFooter>
        </MDBModal>
    );
};

export default ConfirmationPopUp;