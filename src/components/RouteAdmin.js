import React from "react";
import { Route, Redirect } from "react-router-dom";

function RouteAdmin(props) {
  const auth = JSON.parse(localStorage.getItem("auth") || false);

  if (!auth || auth.type !== "admin") {
    return <Redirect to="/" />;
  }

  return <Route {...props} />;
}

export default RouteAdmin;
