import React from "react";
import { Modal } from "react-bootstrap";
import Copyright from '../components/Copyright'

export default function InfoModal({ show, close }) {
  //Bootstrap's style classes for modal window
  const modalHeaderStyle = "bg-dark text-white";
  const modalBodyStyle = "bg-light text-dark border-dark";

  return (
    <>
      <Modal scrollable show={show} fullscreen>
        <Modal.Header
          className={modalHeaderStyle}
          closeButton
          closeVariant="white"
          onHide={() => close()}
        >
          <Modal.Title as="h2">Legal info</Modal.Title>
        </Modal.Header>

        <Modal.Body className={modalBodyStyle}>
         <Copyright/>
        </Modal.Body>
      </Modal>
      ;
    </>
  );
}
