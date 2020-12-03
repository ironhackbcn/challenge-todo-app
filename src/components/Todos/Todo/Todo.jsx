import React from "react";

// * Import MAterial UI
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";

import moment from "moment";

import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

// * Import redux and actions
import { useDispatch } from "react-redux";
import { deleteTodo } from "../../../actions/todos";

// * Import CSS
import useStyles from "./styles";

const Todo = ({ todo, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} title={todo.title} />
      <div className={classes.overlay}>
        <Typography variant="body2">Created by: {todo.creator}</Typography>
        <Typography variant="body2">
          Created {moment(todo.createdAt).fromNow()}
        </Typography>
        <Typography variant="h5">{todo.title}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(todo._id)}
        >
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <CardContent>
        <Typography className={classes.title} variant="body2" gutterBottom>
          {todo.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => dispatch(deleteTodo(todo._id))}
        >
          <DeleteIcon fontSize="small" />
          Delete Todo
        </Button>
      </CardActions>
    </Card>
  );
};

export default Todo;
