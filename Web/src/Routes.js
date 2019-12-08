import React, { useState, useEffect } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import MapPage from "./pages/MapPage";
import NotFoundPage from "./pages/NotFoundPage";
import Auth from "./pages/Auth";

import storage from "./services/storage";
import api from "./services/api";

const Routes = props => {
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

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
    <div className="d-flex flex-1 justify-content-center align-items-center min-vh-100">
      <p className="h4">Carregando aplicação..</p>
    </div>
  ) : (
    <Router>
      <Switch>
        <UnprotectedRoute exact path="/" component={Auth} />
        <ProtectedRoute path="/map" component={MapPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
