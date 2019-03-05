import React from 'react';

class TaskBookingMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task_category: ''
        }

        // this.handleClick = this.handleClick.bind(this);
    }
    
    // handleClick function will do the following: 
    // 1) update the redux-store { task_category: _____ }
    // 2) re-direct to /task-form/new
    
    handleClick(taskCategory){
        

        this.props.receiveTaskCategory(taskCategory);
        this.props.history.push('/task-form/new');
        // 'history' can be passed down to props via 'withRouter';
        // 'withRouter' gives access to 'match', 'location', and 'history' properties of the browser's native API
    }

    render() {
        // console.log(this.state);
        return (
            <div className="dashboard-search-container">
                <div className="dashboard-search-container-inner">
                    <div className="dashboard-search-content">
                        <div className="dashboard-search-content-top">
                            <h1 className="dashboard-search-header">Book Your Next Task</h1>
                            <div><br />Search Bar Component Will Render Here</div>
                        </div>
                        <div className="dashboard-search-content-bottom">
                            <ul className="dashboard-search-content-bottom-container">
                                <a><button onClick={() => this.handleClick('Moving')} className="task-category-button">Moving</button></a>
                                <a><button onClick={() => this.handleClick('Plumbing')} className="task-category-button">Plumbing</button></a>
                                <a><button onClick={() => this.handleClick('Mounting')} className="task-category-button">Mounting</button></a>
                                <a><button onClick={() => this.handleClick('Home Repairs')} className="task-category-button">Home Repairs</button></a>
                                <a><button onClick={() => this.handleClick('Cleaning')} className="task-category-button">Cleaning</button></a>
                            </ul>
                            <ul className="dashboard-search-content-bottom-container">
                                <a><button onClick={() => this.handleClick('Furniture Assembly')} className="task-category-button">Furniture Assembly</button></a>
                                <a><button onClick={() => this.handleClick('Heavy Lifting')} className="task-category-button">Heavy Lifting</button></a>
                                <a><button onClick={() => this.handleClick('Yard Work')} className="task-category-button">Yard Work</button></a>
                                <a><button onClick={() => this.handleClick('Wait in Line')} className="task-category-button">Wait in Line</button></a>
                                <a><button onClick={() => this.handleClick('Event Staffing')} className="task-category-button">Event Staffing</button></a>
                            </ul>
                            <div>See More</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default TaskBookingMain;


// How can I update the redux-store?
// > Dispatching an action is how you update redux store

// How components read from & write to the redux state
// Reading: mapStateToProps; Writing: this.props.dispatch(action) or mapDispatchToProps