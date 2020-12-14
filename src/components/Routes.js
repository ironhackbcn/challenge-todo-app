import React from "react";
import { Route } from "react-router-dom";

const Routes = ({ component: Component} ) => {
  return (
    <Route
      render={(props) =>
        <Component {...Component} />
      }
    />
  );
};

export default Routes;