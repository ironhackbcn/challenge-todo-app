import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { editTODOtask } from "../services/todo.service";

const AlertMessageEdit = (props) => {
  const { _id, title, show, setShow, getTaskService } = props;

  const [task, setTask] = useState({
    title: props.title,
    body: props.body,
  });

  const handleClose = () => {
    setShow(false);
  };

  const handleOnChangeInfo = (event) => {
    const { name, value } = event.target;

    setTask({ ...task, [name]: value });
  };

  const handleEdit = () => {
    // editar aqui los ejercicios
    editTODOtask(_id, task);
    setShow(false);
    getTaskService();
    return;
  };

  return (
    <Modal className="modal-alert-delete" show={show}>
      <Modal.Header closeButton onClick={(e) => handleClose(e)}>
        <Modal.Title>Editando {title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          value={task.title}
          name="title"
          id="input-title"
          onChange={(e) => handleOnChangeInfo(e)}
        />

        <label htmlFor="input-body">Descripcion</label>
        <input
          type="text"
          name="body"
          value={task.body}
          id="input-body"
          onChange={(e) => handleOnChangeInfo(e)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => handleClose()}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleEdit()}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AlertMessageEdit;
