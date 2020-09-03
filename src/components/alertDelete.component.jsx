import React from "react";
import { Button, Modal } from "react-bootstrap";
import { deleteTODOtask } from "../services/todo.service";

const AlertMessageDelete = (props) => {
  const { _id, title, show, setShow, getTaskService } = props;

  const handleClose = () => {
    setShow(false);
  };

  const handleOnClickDelete = () => {
    deleteTODOtask(_id);
    getTaskService();
  };

  return (
    <Modal className="modal-alert-delete" show={show}>
      <Modal.Header closeButton onClick={(e) => handleClose(e)}>
        <Modal.Title>Eliminar {title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>{title}</h3>
        <p>¿Estás seguro que quieres eliminar este TODO?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleOnClickDelete()}>
          Eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertMessageDelete;
