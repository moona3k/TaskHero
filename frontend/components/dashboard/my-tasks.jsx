// This component renders all tasks assigned to the logged-in user in /dashboard

import React from 'react';

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
                        <img className="tasker-profile-img" src={task.tasker.profile_img} alt=""/>
                        <button value={task.id} onClick={this.deleteTask}>Cancel Task</button>
                    </div>
                    
                    <div className="dashboard-task-box-2">
                        <p>Your task is booked with {task.tasker.first_name} {task.tasker.last_name}</p>
                    </div>

                    <div className="dashboard-task-box-3">
                        <div className="dashboard-scheduled-date">{task.scheduled_date}</div>
                        <div className="dashboard-scheduled-time">{task.scheduled_time}</div>
                    </div>

                    <div>
                        <h5>Location</h5>
                        <div>{task.location}</div>
                        <h5>Tasker</h5>
                        <div>{task.tasker.first_name} {task.tasker.last_name}</div>
                        <h5>Price</h5>
                        <div>${task.tasker.hourly_rate}/hr</div>
                        <h5>Description</h5>
                        <div>{task.description}</div>
                        <h5>Vehicle Requirements</h5>
                        <div>{task.vehicle_type}</div>
                    </div>

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