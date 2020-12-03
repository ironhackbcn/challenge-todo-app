import React from "react";
import { Route, Redirect } from "react-router-dom";

const Routes = ({ component: Component} ) => {
  return (
    <Route
      render={(props) =>
        <Component {...Component} />
      }
    />
  );
};

// const AnonRoute = ({ component: Component, isLoggedin, ...rest }) => {
//     console.log(isLoggedin);
//     return (
//       <Route
//         {...rest}
//         render={(props) =>
//           !isLoggedin ? <Component {...props} /> : <Redirect to="/dashboard" />
//         }
//       />
//     );
//   };
  


export default Routes;