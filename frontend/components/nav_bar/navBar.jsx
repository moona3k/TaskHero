import React from 'react';
import { Link } from 'react-router-dom';

const navBar = (props) => {

    const sessionLinks = () => {
        return (
            <nav className="login-signup">
                <Link className="login-button" to="/login">Login</Link>
                {/* &nbsp;or&nbsp; */}
                &nbsp;     &nbsp;
                <Link className="login-button" to="/signup">Sign up!</Link>
            </nav>
        )
    }

    const personalGreeting = () => {
        return (
            <hgroup className="header-group">
                <h2 className="header-name">Welcome {props.currentUser.fname}</h2>
                <button className="header-button" onClick={props.logout}>Log Out</button>
            </hgroup>
        )
    }

    return props.currentUser ? personalGreeting() : sessionLinks();


}

export default navBar;
