import React from "react";

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

const Routes = props => {
    const UnprotectedRoute = ({ component: Component, auth, ...rest }) => {
        const { authenticated } = props;

        return (
            <Route
                {...rest}
                render={props =>
                    !authenticated ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to="/mapa" />
                    )
                }
            />
        );
    };

    const ProtectedRoute = ({ component: Component, auth, ...rest }) => {
        const { authenticated } = props;

        return (
            <Route
                {...rest}
                render={props =>
                    authenticated ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to="/" />
                    )
                }
            />
        );
    };

    return (
        <Router>
            <Switch>
                <UnprotectedRoute exact path="/" component={Auth} />
                <UnprotectedRoute path="/map" component={MapPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    );
};

export default Routes;
