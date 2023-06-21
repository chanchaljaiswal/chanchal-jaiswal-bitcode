import React from "react";
import { Modal, Button } from "react-bootstrap";

/**
 * CustomModal component.
 * 
 * @param {boolean} show - Determines whether the modal is shown or hidden.
 * @param {function} handleModal - Callback function to handle modal visibility.
 * @param {string} title - Title of the modal.
 * @param {string} content - Content to be displayed in the modal body.
 */
const CustomModal = ({ show, handleModal, title, content }) => {
  return (
    <Modal show={show} onHide={()=>handleModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{content}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={()=>handleModal(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
