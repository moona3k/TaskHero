import React from 'react';

class SplashMain extends React.Component {

    render() {
        return (
            <div className="splash-main-container">
                <div className="splash-main-content">
                    <h1 className="main-header">The convenient &amp; affordable way <br /> to get things done around the home</h1>
                    <h3 className="main-sub-header">Choose from over 140,000 vetted Taskers for help without breaking the bank.</h3>
                    <ul className="main-task-categories-container">
                        <a><button className="task-category-button">Mounting & Installation</button></a>
                        <a><button className="task-category-button">Moving & Packing</button></a>
                        <a><button className="task-category-button">Furniture Assembly</button></a>
                        <a><button className="task-category-button">Home Improvement</button></a>
                        <a><button className="task-category-button">General Handyman</button></a>
                        <a><button className="task-category-button">Heavy Lifting</button></a>
                    </ul>
                    <div>SearchBar Component goes here</div>
                </div>
            </div>
        )
    }
}

export default SplashMain;