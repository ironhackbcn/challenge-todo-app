import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

// El componente <PrivateRoute /> recibe como props un objecto con las propiedades: component con el valor de un componente (Private), isLoggedin (viene de withAuth, ya que Private se exporta como withAuth(Private), y el resto de las props (si hubiera))

function PrivateRoute({ component: Component, isLoggedin, ...rest }) {
  // devuelve un componente <Route /> donde su prop render recibe las props, y si está logueado, devuelve el componente con sus props (history, etc.), en caso contrario, el componente <Redirect /> redirige a /login
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}

export default withAuth(PrivateRoute);
