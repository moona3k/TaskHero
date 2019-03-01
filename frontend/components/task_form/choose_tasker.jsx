import React from 'react';
import TaskCalendarContainer from './task_calendar_container';


class ChooseTasker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            tasker_aboutme: '',
            profile_img: '',
            hourly_rate: '',
            tasker_rank: '',
            tasker_skill_type: '',
            vehicle_type: '',
            num_completed_tasks: '',
            reviews_rating: '',
            reviews_num: ''
        }

        this.handleClick = this.handleClick.bind(this);
        // this.receiveDateTime = this.receiveDateTime.bind(this);
    }

    componentWillMount() {
        // componentWillMount vs. componentDidMount
        // General rule of thumb: Use WillMount when you need to fetch initial state
        // Use DidMount if you need to regularly update state

        // Fetch all taskers where 'tasks.task_category === users.tasker_skill_type'

        let taskRequirement = { 
            taskCategory: this.props.currentTask.task_category,
            vehicleType: this.props.currentTask.vehicle_type
        }
        
        this.props.fetchAllTaskers(taskRequirement)
            .then( taskers => {
                this.setState({ taskers: taskers.taskers })
                // console.log(this.state);
            })
    };

    // receiveDateTime(dateTime) {
        
    //     let taskDate = dateTime.taskDate || this.state.scheduled_date;
    //     let taskTime = dateTime.taskTime || this.state.scheduled_time;
        
    //     this.setState({
    //         scheduled_date: taskDate,
    //         scheduled_time: taskTime
    //     })

    //     Callback: < TaskCalendar setDateTime = { this.receiveDateTime } />
    // }
    
    handleClick(id) {
        // e.preventDefault();
        console.log(id)
        // console.log('testing for event: ccc', e.currentTarget.querySelector('input.first_name').value);;

        // let selectedTasker = {
        //     first_name: e.currentTarget.querySelector('input.hidden_first_name').value,
        //     last_name: e.currentTarget.querySelector('input.hidden_last_name').value,
        //     tasker_aboutme: e.currentTarget.querySelector('input.hidden_tasker_aboutme').value,
        //     profile_img: e.currentTarget.querySelector('input.hidden_profile_img').value,
        //     hourly_rate: e.currentTarget.querySelector('input.hidden_hourly_rate').value,
        //     tasker_rank: e.currentTarget.querySelector('input.hidden_tasker_rank').value,
        //     tasker_skill_type: e.currentTarget.querySelector('input.hidden_tasker_skill_type').value,
        //     vehicle_type: e.currentTarget.querySelector('input.hidden_vehicle_type').value,
        //     num_completed_tasks: e.currentTarget.querySelector('input.hidden_num_completed_tasks').value,
        //     reviews_rating: e.currentTarget.querySelector('input.hidden_reviews_rating').value,
        //     reviews_num: e.currentTarget.querySelector('input.hidden_reviews_num').value
        // }

        this.props.receiveTasker(selectedTasker);

        
    }   

    render() {
        console.log(this.state);
        // console.log(this.props);
        
        let allTaskers = this.state.taskers ? this.state.taskers : [];

        const renderAllTaskers = 
            allTaskers.map( (tasker, idx) => {
                return (
                    <div key={`tasker-profile-${idx}`} className="tasker-profile-container">
                        <h2 className="tasker-profile-name">{tasker.first_name} {tasker.last_name}</h2>
                        <h3>${tasker.hourly_rate}/hr</h3>
                            <div className="tasker-profile-stats"><i className="fas fa-tasks"></i>{tasker.num_completed_tasks} {this.props.currentTask.task_category} Tasks</div>
                            <div className="tasker-profile-stats"><i className="far fa-star"></i>{tasker.reviews_rating} Positive Reviews</div>
                            <div className="tasker-profile-stats"><i className="far fa-check-circle"></i>{tasker.reviews_num} Reviews</div>
                            <div className="tasker-profile-stats"><i className="fas fa-car"></i>Vehicle: {tasker.vehicle_type}</div>
                        <h3>How I can help:</h3>
                            <div>{tasker.tasker_aboutme}</div>
                        <br />
                            <button onClick={ () => this.handleClick(tasker.id) }>Select & Continue
                                <input className="hidden_first_name" type="hidden" value={tasker.first_name}/>
                                <input className="hidden_last_name" type="hidden" value={tasker.last_name}/>
                                <input className="hidden_tasker_aboutme" type="hidden" value={tasker.tasker_aboutme}/>
                                <input className="hidden_profile_img" type="hidden" value={tasker.profile_img}/>
                                <input className="hidden_hourly_rate" type="hidden" value={tasker.hourly_rate}/>
                                <input className="hidden_tasker_rank" type="hidden" value={tasker.tasker_rank}/>
                                <input className="hidden_tasker_skill_type" type="hidden" value={tasker.tasker_skill_type}/>
                                <input className="hidden_vehicle_type" type="hidden" value={tasker.vehicle_type}/>
                                <input className="hidden_num_completed_tasks" type="hidden" value={tasker.num_completed_tasks}/>
                                <input className="hidden_reviews_rating" type="hidden" value={tasker.reviews_rating}/>
                                <input className="hidden_reviews_num" type="hidden" value={tasker.reviews_num}/>
                            </button>
                    </div>
                )
            })
        

        return (
            <div>
                <div className="root-container">
                    <div className="choose-tasker-header-container">
                        <h2 className="choose-tasker-header-title">Pick a Tasker</h2>
                        <h3 className="choose-tasker-header-sub">After booking, you can chat with your Tasker, agree on an exact time, or go over any requirements or questions, if necessary.</h3>
                    </div>
                    <div>
                        <div className="sorted-by-text">SORTED BY: (insert sort feature)</div>
                    </div>
                    {renderAllTaskers}
                </div>
                <TaskCalendarContainer />
            </div>
        )
    }
}

export default ChooseTasker;