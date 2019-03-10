import React from 'react';

class TaskerProfile extends React.Component {
    constructor(props){
        super(props);
    }


    handleClick() {

        let selectedTasker = {
            tasker_id: this.props.id
        }

        console.log(selectedTasker)


        this.props.receiveTasker(selectedTasker);
    }   

    render() {
        return(
            <div className="tasker-profile-container">
                <h2 className="tasker-name">{this.props.first_name} {this.props.last_name}</h2>
                <h3>${this.props.hourly_rate}/hr</h3>
                <div className="tasker-stats"><i className="fas fa-tasks"></i>{this.props.num_completed_tasks} {this.props.task_category} Tasks</div>
                <div className="tasker-stats"><i className="far fa-star"></i>{this.props.reviews_rating} Positive Reviews</div>
                <div className="tasker-stats"><i className="far fa-check-circle"></i>{this.props.reviews_num} Reviews</div>
                <div className="tasker-stats"><i className="fas fa-car"></i>Vehicle: {this.props.vehicle_type}</div>
                <h3>How I can help:</h3>
                <div>{this.props.tasker_aboutme}</div>
                <br />
                <button onClick={() => this.handleClick()}>Select & Continue</button>
            </div>
        )
    }
    
}

export default TaskerProfile
