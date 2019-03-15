import React from 'react';
import TaskSearchBarContainer from '../search_bar/task-search-bar-redux';

class SplashMain extends React.Component {
    constructor(props){
        super(props);
    }

    handleClick(e) {
        let selectedTask = e.currentTarget.innerText;
        this.props.initializeTask(selectedTask)
            .then( () => this.props.history.push('/task-form/new'))
    }


    render() {
        return (
            <div className="splash-main-container">
                <div className="splash-main-content">
                    <h1 className="main-header">The convenient &amp; affordable way <br /> to get things done around the home</h1>
                    <h3 className="main-sub-header">Choose from over 140,000 vetted Taskers for help without breaking the bank.</h3>
                    <ul className="main-task-categories-container">
                        <a><button onClick={this.handleClick.bind(this)} className="task-category-button">Mounting & Installation</button></a>
                        <a><button onClick={this.handleClick.bind(this)} className="task-category-button">Moving & Packing</button></a>
                        <a><button onClick={this.handleClick.bind(this)} className="task-category-button">Furniture Assembly</button></a>
                        <a><button onClick={this.handleClick.bind(this)} className="task-category-button">Home Improvement</button></a>
                        <a><button onClick={this.handleClick.bind(this)} className="task-category-button">General Handyman</button></a>
                        <a><button onClick={this.handleClick.bind(this)} className="task-category-button">Heavy Lifting</button></a>
                    </ul>
                    <TaskSearchBarContainer/>
                </div>
            </div>
        )
    }
}

export default SplashMain;