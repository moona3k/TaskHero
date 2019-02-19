// This is where we nest all the components!

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import SplashPage from './splash_page/splash_page';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';

// import SplashPage from './splash-page/splash_page';

const App = () => {
    return (
        <div className="main-page">
            <Switch>
                <AuthRoute exact path="/" component={SplashPage} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
                <AuthRoute path="/login" component={LoginFormContainer} />
                {/* <ProtectedRoute path="/dashboard" component={DashboardContainer} /> */}
            </Switch>

        </div>
    )
}

export default App;