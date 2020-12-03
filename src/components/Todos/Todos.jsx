import React from "react";

// * Import Material UI
import { Grid, CircularProgress } from "@material-ui/core";

import { useSelector } from "react-redux";

// * Import Todo component
import Todo from "./Todo/Todo";

// * Importing CSS Styles
import useStyles from "./styles";

const Todos = ({ setCurrentId }) => {
  const todos = useSelector((state) => state.todos);
  const classes = useStyles();

  return !todos.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {todos.map((todo) => (
        <Grid key={todo._id} item xs={12} sm={6}>
          <Todo todo={todo} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Todos;
