import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './nav_bar/navBar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import SplashPage from './splash-page/splash_page';

const App = () => {
    return (
        <div className="main-page">
            <header className="main-page-header">
                <div className="image"></div>
                <NavBarContainer />
            </header>

            <Switch>
                {/* <SplashPage /> */}
                <AuthRoute path="/login" component={LoginFormContainer} />
                <AuthRoute path="/signup" component={SignupFormContainer} />
            </Switch>

        </div>
    )
}

export default App;