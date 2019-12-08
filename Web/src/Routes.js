import React, { useState, useEffect } from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import MapPage from "./pages/MapPage";
import NotFoundPage from "./pages/NotFoundPage";
import Auth from "./pages/Auth";
import Register from "./pages/Register";

import storage from "./services/storage";
import api from "./services/api";

const Routes = props => {
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

    return (
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
