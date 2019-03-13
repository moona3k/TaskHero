import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Autocomplete from 'react-google-autocomplete';


class TaskDescription extends React.Component {
    constructor(props){
        super(props);
        // debugger;
        this.state = {
            task_category: '',
            location: '',
            specific_location: '',
            estimated_time_req: '',
            vehicle_type: '',
            description: ''
        }

        this.handleRadioButtonClick = this.handleRadioButtonClick.bind(this);
    }

    componentDidMount() {
        // debugger;
        this.props.fetchLatestTask()
            .then( res => this.setState( {
                task_category: res.task.task_category,
                location: res.task.location,
                specific_location: res.task.specific_location,
                estimated_time_req: res.task.estimated_time_req,
                vehicle_type: res.task.vehicle_type,
                description: res.task.description
            }));
    };

    backToDashboard() {
        this.props.history.push('/dashboard');
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }

    handleRadioButtonClick(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
        // console.log('event');
    }


    handleSubmit() {
        // console.log(this.state);
        this.props.updateTaskRequirement(this.state);
        this.props.history.push('taskers');
    };

    render() {
        // debugger;
        console.log('This is props', this.props.currentTask)
        console.log('This is local state ', this.state);
        return (
            <div className="task-description-container">
                <div className="task-description-header">
                    <h1 className="task-description-header-title">Describe Your Task: {this.props.currentTask.task_category}</h1>
                    <h3 className="task-description-header-sub">Is {this.props.currentTask.task_category} not the right task? <a onClick={() => this.backToDashboard()}>Pick another task</a></h3>
                </div>
                <div>
                    <div className="task-description-box">
                        <h3 className="task-description-mini-title">YOUR TASK LOCATION</h3>
                        <div id="location-container">
                            <Autocomplete
                                style={{ width: '90%' }}
                                onPlaceSelected={(place) => {
                                    {/* console.log(place); */}
                                }}
                                types={['(regions)']}
                                componentRestrictions={{ country: "US" }}
                            />
                            
                            <input id="location-general" type="text" value={this.state.location} onChange={this.handleInput('location')} placeholder="Add autocomplete address feature"/>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <input id="location-specific" type="text" value={this.state.specific_location} onChange={this.handleInput('specific_location')} placeholder="Unit or Apt #"/>
                        </div>
                        <br/>
                        <button className="task-description-button">Continue</button>
                    </div>
                    <div className="task-description-box">
                        <h3 className="task-options-title">TASK OPTIONS</h3>
                        <h3 className="task-options-headers">How big is your task?</h3>
                        <hr className="general-line" />
                        <div className="task-size-radio-button-container">
                            <span><input className="radio-button-input" type="radio" name="task_size" value="small" checked={this.state.estimated_time_req === "small"} onClick={this.handleRadioButtonClick('estimated_time_req')} /><label className="radio-button-label"> Small - Est. 1 hr</label></span>
                            <span><input className="radio-button-input" type="radio" name="task_size" value="medium" checked={this.state.estimated_time_req === "medium"} onClick={this.handleRadioButtonClick('estimated_time_req')} /><label className="radio-button-label"> Medium - Est. 2-3 hrs</label></span>
                            <span><input className="radio-button-input" type="radio" name="task_size" value="large" checked={this.state.estimated_time_req === "large"} onClick={this.handleRadioButtonClick('estimated_time_req')} /><label className="radio-button-label"> Large - Est. 4+ hrs</label></span>
                        </div>
                        <br />
                        <h3 className="task-options-headers">Vehicle Requirements</h3>
                        <hr className="general-line" />
                        <div className="vehicle-radio-button-container">
                            <label className="radio-button-label"><input className="radio-button-input"  type="radio" name="vehicle_type" value="No vehicle needed" checked={this.state.vehicle_type === "No vehicle needed"} onClick={this.handleRadioButtonClick('vehicle_type')} /> Not needed for task</label>
                            <label className="radio-button-label"><input className="radio-button-input"  type="radio" name="vehicle_type" value="Car" checked={this.state.vehicle_type === "Car"} onClick={this.handleRadioButtonClick('vehicle_type')} /> Task requires a car</label>
                            <label className="radio-button-label"><input className="radio-button-input"  type="radio" name="vehicle_type" value="Truck" checked={this.state.vehicle_type === "Truck"} onClick={this.handleRadioButtonClick('vehicle_type')} /> Task requires a truck</label>
                        </div>
                        <br />
                        <button className="task-description-button">Continue</button>
                    </div>
                    <div className="task-description-box-edit">
                        <h3 className="task-description-mini-title">TELL US THE DETAILS OF YOUR TASK</h3>
                        <h3 className="task-description-subtext-1">Start the conversation and tell your Tasker what you need done. This helps us show you only qualified and available Taskers for the job. <br />Don't worry, you can edit this later.</h3>
                        <textarea className="task-description-textarea" value={this.state.description} onChange={this.handleInput('description')} cols="30" rows="10" placeholder="Provide a summary of what you need done for your Tasker. Be sure to include details like the size of your space, any equipment/tools needed, and how to get in."></textarea>
                        <h3 className="task-description-subtext-2">If you need two or more Taskers, please post additional tasks for each Tasker needed.</h3>
                        <button className="task-description-button" onClick={() => this.handleSubmit()}>See Taskers & Prices</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskDescription;


