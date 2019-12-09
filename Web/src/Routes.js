import React, { useEffect, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import MapPage from "./pages/MapPage";
import NotFoundPage from "./pages/NotFoundPage";
import Auth from "./pages/Auth";
import Register from "./pages/Register";

import storage from "./services/storage";
import api from "./services/api";

const Routes = props => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = storage.getToken();

    if (token) api.defaults.headers.Authorization = token;

    setLoading(false);
  }, []);

  const UnprotectedRoute = ({ component: Component, ...rest }) => {
    const token = storage.getToken();

    return (
      <Route
        {...rest}
        render={props =>
          !token ? <Component {...props} /> : <Redirect to="/map" />
        }
      />
    );
  };

  const ProtectedRoute = ({ component: Component, ...rest }) => {
    const token = storage.getToken();

    return (
      <Route
        {...rest}
        render={props =>
          token ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
  };

  return loading ? (
    <div className="d-flex min-vh-100 justify-content-center align-items-center">
      <p className="h1">Carregando aplicação...</p>
    </div>
  ) : (
    <Router>
      <Switch>
        <UnprotectedRoute exact path="/" component={Auth} />
        <UnprotectedRoute path="/register" component={Register} />
        <ProtectedRoute path="/map" component={MapPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
