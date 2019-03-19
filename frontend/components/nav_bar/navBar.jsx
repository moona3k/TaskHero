import React from 'react';
import { Link } from 'react-router-dom';

//../../app/assets/images/task-hero-logo.png

const navBar = (props) => {
    console.log(window.location.origin)
    const preSession = () => {
        return (
            <div className="session-bar">
                <Link to="/"><img className="task-hero-logo" src='https://i.imgur.com/SsPX10q.png'/></Link>
                <div className="session-button">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Sign up</Link>
                </div>
            </div>
        )
    }

    const postSession = () => {
        return (
            <div className="session-bar">
                <Link to="/dashboard"><img className="task-hero-logo" src="https://i.imgur.com/SsPX10q.png" /></Link>
                {/* <h2>Welcome {props.currentUser.first_name}</h2> */}
                <button className="logout-button" onClick={props.logout}>Log Out</button>
            </div>
        )
    }

    return props.currentUser ? postSession() : preSession();
}

export default navBar;
