import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/routes_utils';

const App = () => {
    return (
        <div className="main-page">
            <header className="main-page-header">
                <div className="image"></div>
                <GreetingContainer />
            </header>

            <Switch>
                <SplashPage />
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
            </Switch>

        </div>
    )
}

export default App;