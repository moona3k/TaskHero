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
            
            // .then( res => { console.log('this is returned result', res);

            })
    };
    
    handleClick(id) {
        console.log(id)

        let selectedTasker = {
            tasker_id: id
        }

        this.props.receiveTasker(selectedTasker);

        
    }   

    render() {
        // console.log(this.state);
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
                            <button onClick={ () => this.handleClick(tasker.id) }>Select & Continue</button>
                    </div>
                )
            })
        
        console.log('this is allTaskers', allTaskers);
        console.log('this is props', this.props.currentTask);

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