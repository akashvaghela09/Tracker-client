import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import { NotFound } from './NotFound';
import { Register } from './Register';
import { Welcome } from './Welcome';

const AllRoutes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/welcome">
                    <Welcome />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </div>
    )
}

export { AllRoutes }