import React from 'react';
import { Modal, Image } from "react-bootstrap";

function MyModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className="myModal"
        >
            <Modal.Header className="modalHeader" closeButton>
                <Modal.Title className="modalHeader" id="contained-modal-title-vcenter">
                    <Image src={props.profileImage} roundedCircle />
                    {props.name}
                    <br />
                    @{props.username}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="modalHeader">
                <img className="modalImg" src={props.data} />
            </Modal.Body>
            <Modal.Footer>
                {props.location}
            </Modal.Footer>
        </Modal>
    );
}

export default MyModal;

