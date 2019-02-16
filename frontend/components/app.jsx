import React from 'react';
import { Route, Switch } from 'react-router-dom';
import navBarContainer from './nav_bar/navBar_container';
import { AuthRoute, ProtectedRoute } from '../util/routes_utils';
import SplashPage from './splash-page/splash_page';

const App = () => {
    return (
        <div className="main-page">
            <header className="main-page-header">
                <div className="image"></div>
                <navBarContainer />
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