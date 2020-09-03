import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import AlertMessageEdit from "./alertUpdate.component";
import AlertMessageDelete from "./alertDelete.component";

const CardTask = (props) => {
  const { title, body, getTaskService } = props; // in this props i have all TASK info
  const [show, setShow] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const handleShowAlertEdit = () => {
    setIsDelete(false);
    setShow(!show);
  };
  const handleShowAlertDelete = () => {
    setIsDelete(true);
    setShow(!show);
  };

  return (
    <>
      <Card
        style={{ width: "30rem", marginBottom: "3rem"}}
      >
        <Card.Body>
          <Card.Title>Card {title}</Card.Title>
          <Card.Text>{body}</Card.Text>
          <Button onClick={() => handleShowAlertDelete()}>delete</Button>
          <Button onClick={() => handleShowAlertEdit()} id="EditButton">
            Edit
          </Button>
        </Card.Body>
      </Card>

      {show && isDelete ? (
        <AlertMessageDelete
          {...props} // i pass all TASK INFO
          show={show} // control SHOW ALERT
          setShow={setShow}
          getTaskService={getTaskService} // RELOAD PAGE
        />
      ) : (
        <AlertMessageEdit
          {...props}
          show={show}
          setShow={setShow}
          getTaskService={getTaskService}
        />
      )}
    </>
  );
};

export default CardTask;
