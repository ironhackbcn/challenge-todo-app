import React, { useState, useEffect } from "react";

// * Importing Material-Ui for structure and styling
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

// * After redux is initialized, we add this lane to dispatch an action
import { useDispatch } from "react-redux";

// * Importing our actions
import { getAllTodos } from "./actions/todos";

// * Import our Components
import Todos from "./components/Todos/Todos";
import Form from "./components/Form/Form";

// * Importing our CSS files
import useStyles from "./styles";

const App = () => {
  const [currentId, setCurrentId] = useState(null);

  // Calling css styles
  const classes = useStyles();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodos());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h3" align="center">
          Todo List
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Todos setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
