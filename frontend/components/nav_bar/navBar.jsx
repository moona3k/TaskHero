import React from 'react';
import { Link } from 'react-router-dom';

const navBar = (props) => {

    const preSession = () => {
        return (
            <div className="session-bar">
                <Link to="/"><img className="task-hero-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETR13ThV9CFXJveiFI4lPVYmzn0tSUnaw9BCccSXwPGvNW24F"/></Link>
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
                <Link to="/dashboard"><img className="task-hero-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSETR13ThV9CFXJveiFI4lPVYmzn0tSUnaw9BCccSXwPGvNW24F" /></Link>
                {/* <h2>Welcome {props.currentUser.first_name}</h2> */}
                <button className="logout-button" onClick={props.logout}>Log Out</button>
            </div>
        )
    }

    return props.currentUser ? postSession() : preSession();
}

export default navBar;
