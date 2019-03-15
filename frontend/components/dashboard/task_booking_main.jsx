import React from 'react';
import TaskSearchBarContainer from '../search_bar/task-search-bar-redux';

class TaskBookingMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task_category: '',
            showMoreTasks: false
        }
    }
    
    // handleClick function will do the following: 
    // 1) update the redux-store { task_category: _____ }
    // 2) re-direct to /task-form/new
    
    handleClick(taskCategory){
        

        this.props.initializeTask(taskCategory);
        this.props.history.push('/task-form/new');
        // 'history' can be passed down to props via 'withRouter';
        // 'withRouter' gives access to 'match', 'location', and 'history' properties of the browser's native API
    }

    showMoreTasks() {
        this.setState({ showMoreTasks: true })
    }

    showLessTasks() {
        this.setState({ showMoreTasks: false })
    }

    render() {
        console.log(this.state.showMoreTasks);

        let renderMoreTasks = <div/>

        if (this.state.showMoreTasks === true) {
            
            renderMoreTasks = 
            <div>
                <div>
                    <a><button onClick={() => this.handleClick('Personal Assistant')} className="task-category-button">Personal Assistant</button></a>
                    <a><button onClick={() => this.handleClick('Arts / Crafts')} className="task-category-button">Arts / Crafts</button></a>
                    <a><button onClick={() => this.handleClick('Carpentry')} className="task-category-button">Carpentry</button></a>
                    <a><button onClick={() => this.handleClick('Electrician')} className="task-category-button">Electrician</button></a>
                    <a><button onClick={() => this.handleClick('Decoration')} className="task-category-button">Decoration</button></a>
                </div>
                <div>
                    <a><button onClick={() => this.handleClick('Graphic Design')} className="task-category-button">Graphic Design</button></a>
                    <a><button onClick={() => this.handleClick('Accounting')} className="task-category-button">Accounting</button></a>
                    <a><button onClick={() => this.handleClick('Packing & Shipping')} className="task-category-button">Packing & Shipping</button></a>
                    <a><button onClick={() => this.handleClick('Videography')} className="task-category-button">Videography</button></a>
                </div>
                <div>
                    <a><button onClick={() => this.handleClick('Shopping')} className="task-category-button">Shopping</button></a>
                    <a><button onClick={() => this.handleClick('Sewing')} className="task-category-button">Sewing</button></a>
                    <a><button onClick={() => this.handleClick('Delivery')} className="task-category-button">Delivery</button></a>
                    <a><button onClick={() => this.handleClick('Marketing')} className="task-category-button">Marketing</button></a>
                </div>
                
                <div onClick={this.showLessTasks.bind(this)} className="text-see-more-less">See Less</div>
            </div>
        
        } else {
            renderMoreTasks = 
            <div 
                onClick={this.showMoreTasks.bind(this)} 
                className="text-see-more-less">
                    See More
            </div>    
        }

        return (
            <div className="dashboard-task-categories-container">
                <div>
                    <div className="task-categories-header-container">
                        <h1 className="task-categories-header-1">Welcome back, {this.props.currentUser.first_name}</h1>
                        <h1 className="task-categories-header-2">Book Your Next Task Today!</h1>
                    </div>
                        
                    <div className="dashboard-search-bar">
                        <TaskSearchBarContainer />
                    </div>
                    
                    <div className="task-categories-body-container">
                        <ul className="task-categories-box-1">
                            <a><button onClick={() => this.handleClick('Moving')} className="task-category-button">Moving</button></a>
                            <a><button onClick={() => this.handleClick('Plumbing')} className="task-category-button">Plumbing</button></a>
                            <a><button onClick={() => this.handleClick('Mounting')} className="task-category-button">Mounting</button></a>
                            <a><button onClick={() => this.handleClick('Home Repairs')} className="task-category-button">Home Repairs</button></a>
                            <a><button onClick={() => this.handleClick('Cleaning')} className="task-category-button">Cleaning</button></a>
                        </ul>
                        <ul className="task-categories-box-2">
                            <a><button onClick={() => this.handleClick('Furniture Assembly')} className="task-category-button">Furniture Assembly</button></a>
                            <a><button onClick={() => this.handleClick('Heavy Lifting')} className="task-category-button">Heavy Lifting</button></a>
                            <a><button onClick={() => this.handleClick('Yard Work')} className="task-category-button">Yard Work</button></a>
                            <a><button onClick={() => this.handleClick('Wait in Line')} className="task-category-button">Wait in Line</button></a>
                            <a><button onClick={() => this.handleClick('Event Staffing')} className="task-category-button">Event Staffing</button></a>
                        </ul>
                    </div>
            
                    <div className="task-categories-box-3">
                        {renderMoreTasks}
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