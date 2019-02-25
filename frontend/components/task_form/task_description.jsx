import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

class TaskDescription extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            location: '',
            specific_location: '',
            estimated_time_req: '',
            vehicle_type: '',
            task_description: ''
        }

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }


    backToDashboard() {
        this.props.history.push('/dashboard');
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleButtonClick(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
        // console.log('event');
    }


    handleSubmit() {
        this.props.receiveTaskDescription(this.state);
        this.props.history.push('task-form/taskers');
    };

    render() {
        console.log(this.state);
        return (
            <div className="task-description-container">
                <div className="task-description-header">
                    <h1 className="task-description-header-title">Describe Your Task: {this.props.task_category}</h1>
                    <h3 className="task-description-header-sub">Is {this.props.task_category} not the right task? <a onClick={() => this.backToDashboard()}>Pick another task</a></h3>
                </div>
                <div>
                    <div className="task-description-box">
                        <h3>YOUR TASK LOCATION</h3>
                        <input type="text" value={this.state.location} onChange={this.handleInput('location')} placeholder="Add autocomplete address feature"/>
                        <div>Unit or Apt #<input type="text" value={this.state.specific_location} onChange={this.handleInput('specific_location')} /></div>
                        <br/>
                        <button >Continue</button>
                    </div>
                    <div className="task-description-box">
                        <h3>TASK OPTIONS</h3>
                        <div>How big is your task?</div>
                        <div className="task-description-radio-button-container">
                            <input type="radio" name="task_size" value="small" onClick={this.handleButtonClick('estimated_time_req')} /><label>Small - Est. 1 hr</label>
                            <input type="radio" name="task_size" value="medium" onClick={this.handleButtonClick('estimated_time_req')} /><label>Medium - Est. 2-3 hrs</label>
                            <input type="radio" name="task_size" value="large" onClick={this.handleButtonClick('estimated_time_req')} /><label>Large - Est. 4+ hrs</label>
                        </div>
                        <br />
                        <div>Vehicle Requirements</div>
                        <div className="task-description-radio-button-container">
                            <input type="radio" name="vehicle_type" value="none" onClick={this.handleButtonClick('vehicle_type')} /><label>Not needed for task</label>
                            <input type="radio" name="vehicle_type" value="car" onClick={this.handleButtonClick('vehicle_type')} /><label>Task requires a car</label>
                            <input type="radio" name="vehicle_type" value="truck" onClick={this.handleButtonClick('vehicle_type')} /><label>Task requires a truck</label>
                        </div>
                        <br />
                        <button>Continue</button>
                    </div>
                    <div className="task-description-box">
                        <h3>TELL US THE DETAILS OF YOUR TASK</h3>
                        <div>Start the conversation and tell your Tasker what you need done. This helps us show you only qualified and available Taskers for the job. Don't worry, you can edit this later.</div>
                        <textarea value={this.state.task_description} onChange={this.handleInput('task_description')} cols="30" rows="10" placeholder="Provide a summary of what you need done for your Tasker. Be sure to include details like the size of your space, any equipment/tools needed, and how to get in."></textarea>
                        <div>If you need two or more Taskers, please post additional tasks for each Tasker needed.</div>
                        <button onClick={() => this.handleSubmit()}>See Taskers & Prices</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskDescription;