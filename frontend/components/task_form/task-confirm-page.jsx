import React from 'react';
import { Link } from 'react-router-dom';

class TaskConfirmPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: 'RENDER taskDescription'
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentWillMount() {
        this.props.fetchLatestTask()
            .then(
                // fetchLatestTask: ajax call to retrieve current task
                // upon receival, redux-store is updated so mSTP will receive the new state and we now have access to tasker_id!
                // task_id = this.props.currentTask.tasker_id
                this.props.fetchAssignedTasker(this.props.currentTask.tasker_id)
            )
    }

    handleChange(e) {
        this.setState({ description: e.currentTarget.value} );
    }

    handleClick() {
        
    }

    render() {
        console.log(this.props.currentTask)
        return(
            <div>
                <div>
                    <div>
                        <div>{this.props.currentTask.task_category}</div>
                        <div>RENDER hourlyRate</div>
                    </div>
                    <div>
                        <div>Date & Time</div>
                        <div>RENDER Date (RENDER Time)</div>
                        <div>Task Location</div>
                        <div>RENDER taskLocation</div>
                        <div>Vehicle Requirements</div>
                        <div>RENDER vehicleType</div>
                    </div>
                    <div>
                        <div>Tasker</div>
                        <div>RENDER taskerImageURL</div>
                        <div>RENDER taskerName</div>
                    </div>
                    <div>
                        <div>Task Description</div>        
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