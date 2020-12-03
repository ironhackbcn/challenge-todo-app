import React, { useState, useEffect } from "react";

// * Import Material UI components
import { TextField, Button, Typography, Paper } from "@material-ui/core";

// * Import Redux
import { useDispatch, useSelector } from "react-redux";

// * Import Actions
import { createTodo, updateTodo } from "../../actions/todos";

// * Import Css
import useStyles from "./styles";

const Form = ({ currentId, setCurrentId }) => {
  const [todoData, setTodoData] = useState({
    creator: "",
    title: "",
    message: "",
  });

  // Fetch a new Todo
  const todo = useSelector((state) =>
    currentId ? state.todos.find((t) => t._id === currentId) : null
  );

  // CAlling Dispatch
  const dispatch = useDispatch();

  // Calling Css
  const classes = useStyles();

  // Populate the values of the form
  useEffect(() => {
    if (todo) setTodoData(todo);
  }, [todo]);

  // function at submit the form

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateTodo(currentId, todoData));
    } else {
      dispatch(createTodo(todoData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setTodoData({ creator: "", title: "", message: "" });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? "Editing" : "Creating"} a TODO
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={todoData.creator}
          onChange={(e) =>
            setTodoData({ ...todoData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={todoData.title}
          onChange={(e) => setTodoData({ ...todoData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={todoData.message}
          onChange={(e) =>
            setTodoData({ ...todoData, message: e.target.value })
          }
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
