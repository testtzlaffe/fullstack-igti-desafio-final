import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function CreateTransactionModal({ isOpen, handleHideModal }) {
  return (
    <Modal show={isOpen} onHide={handleHideModal}>
      <Modal.Header>
        <Modal.Title>Hi</Modal.Title>
      </Modal.Header>
      <Modal.Body>The body</Modal.Body>
      <Modal.Footer>
        <Button onClick={handleHideModal}>Cancel</Button>
        <Button>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}
