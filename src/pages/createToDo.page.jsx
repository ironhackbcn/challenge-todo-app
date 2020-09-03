import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { createTODOtask } from "../services/todo.service";

const CreateTodo = () => {
  const [task, setTask] = useState({ title: "", body: "" });

  const handleOnChangeInfo = (event) => {
    const { name, value } = event.target;
    setTask({ ...task, [name]: value }); // update my task all time
  };

  const handleSubmitCreateTODO = (event) => {
    event.preventDefault();
    createTODOtask(task); // Call from my api service 
    setTask({ title: "", body: "" }); // RESET TASK TO CREATE NEW
  };

  return (
    <Form onSubmit={(e) => handleSubmitCreateTODO(e)}>
      <Form.Group controlId="todo-task">
        <Form.Label>Todo task Name</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={task.title}
          onChange={(e) => handleOnChangeInfo(e)}
          placeholder="write something"
        />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>What do you want to do?</Form.Label>
        <Form.Control
          name="body"
          value={task.body}
          onChange={(e) => handleOnChangeInfo(e)}
          as="textarea"
          rows="3"
        />
      </Form.Group>
      <Button type="submit">Create todo</Button>
    </Form>
  );
};

export default CreateTodo;
