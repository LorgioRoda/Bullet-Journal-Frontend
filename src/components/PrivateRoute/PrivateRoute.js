import React from "react";
import { Redirect, Route } from "react-router";
import { withAuth } from "../../context/auth.context";

function PrivateRoute(routeProps) {
  // Value viene del AuthProvider
  const { isLoggedIn, isLoading } = routeProps;

  // props provienen del componente PrivateRoute
  const { exact, path } = routeProps;
  const ComponentToShow = routeProps.component;

  // Comprueba el usuario
  if (isLoading) return <p>Loading...</p>;
  return (
    <Route
      exact={exact}
      path={path}
      render={function (props) {
        if (!isLoggedIn) return <Redirect to="/login" />;
        else if (isLoggedIn) return <ComponentToShow {...props} />;
      }}
    />
  );
}

export default withAuth(PrivateRoute);
