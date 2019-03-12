import React from 'react';
import TaskDateTimeRedux from './task-date-time/task-date-time-redux';
import TaskerProfileRedux from './tasker-profile/tasker-profile-redux';


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

        // this.receiveDateTime = this.receiveDateTime.bind(this);
    }

    componentDidMount() {
        // componentWillMount vs. componentDidMount
        // General rule of thumb: Use WillMount when you need to fetch initial state
        // Use DidMount if you need to regularly update state

        // Fetch all taskers where 'tasks.task_category === users.tasker_skill_type'
        
        let taskRequirement = {
            taskCategory: '',
            vehicleType: ''
        };
        
        this.props.fetchLatestTask()
            .then( res => {
                taskRequirement.taskCategory = res.task.task_category;
                taskRequirement.vehicleType = res.task.vehicle_type;
                console.log(taskRequirement)
            })
            .then( () => this.props.fetchAllTaskers(taskRequirement)
            .then( taskers => {
                console.log('about to set state')
                this.setState({ taskers: taskers.taskers })
                
            // .then( res => { console.log('this is returned result', res);

            }))
    };

    // componentWillReceiveProps(nextProps)
    // if nextProps.currentTask !== this.props.currentTask
    // then this.setState(nextProps.currentTask)

    render() {
        // console.log(this.state);
        // console.log(this.props);
        
        let allTaskers = this.state.taskers ? this.state.taskers : [];

        const renderAllTaskers = 
            allTaskers.map( (tasker, idx) => {
                return (
                    <TaskerProfileRedux
                        key={`tasker-profile-${idx}`}
                        id={tasker.id}
                        first_name={tasker.first_name}
                        last_name={tasker.last_name}
                        task_category={tasker.tasker_skill_type}
                        profile_img={tasker.profile_img}
                        hourly_rate={tasker.hourly_rate}
                        num_completed_tasks={tasker.num_completed_tasks}
                        reviews_rating={tasker.reviews_rating}
                        reviews_num={tasker.reviews_num}
                        vehicle_type={tasker.vehicle_type}
                        tasker_rank={tasker.tasker_rank}
                        aboutme={tasker.tasker_aboutme}
                    />
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
                    <div className="choose-tasker-body-container">
                        <TaskDateTimeRedux />
                        {renderAllTaskers}
                    </div>
                </div>
            </div>
        )
    }
}

export default ChooseTasker;