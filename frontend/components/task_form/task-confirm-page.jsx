import React from 'react';
import { Link } from 'react-router-dom';

class TaskConfirmPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: '',
            userId: this.props.currentUser.id
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        
        this.props.fetchLatestTask()
            .then( res => {
                let tasker_id = res.task.tasker_id;
                this.props.fetchAssignedTasker(tasker_id)
                this.setState({ description: res.task.description })
            })
    }

    handleChange(e) {
        this.setState({ description: e.currentTarget.value} );
    }

    handleClick() {
        let taskDescription = this.state;
        this.props.updateTaskDescription(taskDescription)
        this.props.history.push('/dashboard');
    }

    render() {
        console.log('current task', this.props.currentTask)
        console.log('current tasker', this.props.currentTasker)

        return(
            <div className="confirm-task-root-container">
                <div className="confirm-task-container">
                    <div className="confirm-task-header">
                        <h2 className="confirm-task-category">{this.props.currentTask.task_category}</h2>
                        <h2 className="confirm-hourly-rate">${this.props.currentTasker.hourly_rate}/hr</h2>
                    </div>

                    <div className="confirm-task-big-box">
                        <div className="confirm-task-box-1">
                            <h3 className="confirm-task-title">Date & Time</h3>
                            <div>{this.props.currentTask.scheduled_date} / {this.props.currentTask.scheduled_time}</div>
                        </div>

                        <div className="confirm-tasker-profile-container">
                            <img className="confirm-tasker-profile-img" src={this.props.currentTasker.profile_img} alt="" />
                            <div className="confirm-tasker-profile-inner-box">
                                <h3 className="confirm-task-title">Tasker</h3>
                                <div>{this.props.currentTasker.first_name} {this.props.currentTasker.last_name}</div>
                            </div>
                        </div>
                    </div>


                    <div className="confirm-task-box">
                        <h3 className="confirm-task-title">Task Location</h3>
                        <div><i className="fa fa-map-marker" /> {this.props.currentTask.location}</div>
                    </div>

                    <div className="confirm-task-box">
                        <h3 className="confirm-task-title">Vehicle Requirements</h3>
                        <div>{this.props.currentTask.vehicle_type}</div>
                    </div>
                  
                    <div>
                        <h3 className="confirm-task-title">Task Description</h3>        
                        <textarea onChange={this.handleChange} value={this.state.description} className="confirm-task-textarea">
                        </textarea>
                    </div>
                    <div className="confirm-bottom-box">
                        <Link className="confirm-edit-link" to='/task-form/new'><i className="fa fa-cog" aria-hidden="true"></i> Edit Task</Link>
                        <button className="confirm-button" onClick={this.handleClick}>Confirm & Book</button>
                        <small className="confirm-bottom-box-text">You are charged only after your task is completed.</small>
                    </div>
                </div>

                <div className="confirm-task-footer">
                    <p className="confirm-footer-text">Tasks have a one-hour minimum. A <b className="confirm-footer-text-highlight">13.5% Trust and Support fee</b> is added to the Tasker’s total rate.</p>
                    <br />
                    <p className="confirm-footer-text">Pursuant to the Terms of Service, if you cancel your task within 24 hours of the scheduled start time, you may be charged a one-hour cancellation fee at the Tasker's hourly rate. If you selected a recurring cleaning, this is a task with repeat appointments. If you cancel the task (all appointments) or skip any individual appointment within 24 hours of the scheduled start time, you may be charged a one-hour cancellation fee at the Tasker's hourly rate.</p>
                    <br />
                    <p className="confirm-footer-text">For more details see <b className="confirm-footer-text-highlight">Terms of Service</b></p>
                </div>
            </div>
        )
    }

}

export default TaskConfirmPage;