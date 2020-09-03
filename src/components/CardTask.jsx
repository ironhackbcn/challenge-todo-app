import React from "react";
import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import AlertMessageEdit from "./alertUpdate.component";
import AlertMessageDelete from "./alertDelete.component";

const CardTask = (props) => {
  const { title, body, getTaskService } = props;
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
        style={{ width: "30rem", marginBottom: "3rem", marginLeft: "10rem" }}
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
          {...props}
          show={show}
          setShow={setShow}
          getTaskService={getTaskService}
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
