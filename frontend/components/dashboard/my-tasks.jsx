// This component renders all tasks assigned to the logged-in user in /dashboard

import React from 'react';
import ToggleMenu from './toggle-menu';

class MyTasks extends React.Component {
    constructor(props){
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
    }

    // componentDidMount() {
    //     user_id = 
    //     this.props.fetchAllTasks(user_id)
    // }

    componentDidMount() {
        let userId = this.props.currentUser.id;
        this.props.fetchAllTasks(userId);
    }

    deleteTask(e){
        let taskId = e.currentTarget.value;
        this.props.deleteSelectedTask(taskId);
    }

    handleTogger() {
        
    }


    //     ajax_fetchAllUserTasks(user_id) // ajax call
    //     .then( response => { // return object contains all tasks assigned to user_id
    //         this.setState(response); // update the local state w / task information
    //     })

    render() {
        // this.props.currentTasks returns {} of task objects
        // need to convert { {task1}, {task2}, {task3} ...} into an array [ {}, {}, {} ...]
        let objectOfTasks = this.props.currentTasks ? this.props.currentTasks : {};
        let arrayOfTasks = [];

        Object.keys(objectOfTasks).map( key => {
            let singleTask = objectOfTasks[key];
            arrayOfTasks.push(singleTask)
        })

        console.log(arrayOfTasks)

        let myTask = arrayOfTasks.map( (task, idx) => {
            return (
                <div key={`my-task-${idx}`} className="dashboard-task-container">
                    <div className="dashboard-task-box-1">
                        <h3 className="dashboard-task-h3">{task.task_category}</h3>
                        <div className="tasker-profile-container-box">
                            <img className="tasker-profile-img-small" src={task.tasker.profile_img} alt=""/>
                            <a onClick={this.deleteTask}><input type="hidden" value={task.id}/>Cancel Task</a>
                        </div>
                    </div>
                    
                    <div className="dashboard-task-box-2">
                        <p>Your task is booked with {task.tasker.first_name} {task.tasker.last_name}</p>
                    </div>

                    <div className="dashboard-task-box-3">
                        <div className="dashboard-scheduled-date">{task.scheduled_date}</div>
                        <div className="dashboard-scheduled-time">{task.scheduled_time}</div>
                    </div>
                 
                    <ToggleMenu 
                        location={task.location}
                        first_name={task.tasker.first_name}
                        last_name={task.tasker.last_name}
                        hourly_rate={task.tasker.hourly_rate}
                        description={task.description}
                        vehicle_type={task.vehicle_type}
                    />
                </div>
            )
        })

        return (
            <div className="dashboard-root-container">
                <h1 className="dashboard-header">My Tasks</h1>
                {myTask}
            </div>    
        )
    }
}

export default MyTasks;

// <div className="toggle-detail">
//     <strong>Show Details <i className="fa fa-angle-up"></i></strong>
// </div>