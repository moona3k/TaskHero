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

    componentWillMount() {
        
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
            <div>
                <div>
                    <div>
                        <div>{this.props.currentTask.task_category}</div>
                        <div>${this.props.currentTasker.hourly_rate}/hr</div>
                    </div>
                    <div>
                        <h4>Date & Time</h4>
                        <div>{this.props.currentTask.scheduled_date} / {this.props.currentTask.scheduled_time}</div>
                        <h4>Task Location</h4>
                        <div>{this.props.currentTask.location}</div>
                        <h4>Vehicle Requirements</h4>
                        <div>{this.props.currentTask.vehicle_type}</div>
                    </div>
                    <div>
                        <h4>Tasker</h4>
                        <img className="tasker-profile-img" src={this.props.currentTasker.profile_img} alt=""/>
                        <div>{this.props.currentTasker.first_name} {this.props.currentTasker.last_name}</div>
                    </div>
                    <div>
                        <h4>Task Description</h4>        
                        <textarea onChange={this.handleChange} value={this.state.description} name="" id="" cols="30" rows="10">
                        </textarea>
                    </div>
                    <div>You are charged only after your task is completed.</div>
                    <button onClick={this.handleClick}>Confirm & Book</button>
                    <br/>
                    <Link to='/task-form/new'>Edit Task</Link>
                </div>

                <div>
                    <p>Tasks have a one-hour minimum. A <b>13.5% Trust and Support fee</b> is added to the Tasker’s total rate.</p>
                    <br />
                    <p>Pursuant to the Terms of Service, if you cancel your task within 24 hours of the scheduled start time, you may be charged a one-hour cancellation fee at the Tasker's hourly rate. If you selected a recurring cleaning, this is a task with repeat appointments. If you cancel the task (all appointments) or skip any individual appointment within 24 hours of the scheduled start time, you may be charged a one-hour cancellation fee at the Tasker's hourly rate.</p>
                    <br />
                    <p>For more details see <b>Terms of Service</b></p>
                </div>
            </div>
        )
    }

}

export default TaskConfirmPage;