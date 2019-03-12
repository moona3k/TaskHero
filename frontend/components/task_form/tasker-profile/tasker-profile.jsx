import React from 'react';

class TaskerProfile extends React.Component {
    constructor(props){
        super(props);
    }


    chooseTasker() {

        let taskerId = this.props.id;

        // console.log(selectedTasker)
        this.props.updateTaskerId(taskerId);
        this.props.history.push('confirm');
    };

    render() {
        return(
            <div className="tasker-container">
                <div className="tasker-profile">
                    <img className="tasker-img" src={this.props.profile_img}/>
                    <button onClick={() => this.chooseTasker()}>Select & Continue</button>
                </div>

                <div>
                    <h2 className="tasker-name">{this.props.first_name} {this.props.last_name}</h2>
                    <h3>${this.props.hourly_rate}/hr</h3>
                    <div className="tasker-stats"><i className="fas fa-tasks"></i>{this.props.num_completed_tasks} {this.props.task_category} Tasks</div>
                    <div className="tasker-stats"><i className="far fa-star"></i>{this.props.reviews_rating} Positive Reviews</div>
                    <div className="tasker-stats"><i className="far fa-check-circle"></i>{this.props.reviews_num} Reviews</div>
                    <div className="tasker-stats"><i className="fas fa-car"></i>Vehicle: {this.props.vehicle_type}</div>
                    <h3>How I can help:</h3>
                    <div>{this.props.aboutme}</div>
                    <br />
                </div>
            </div>
        )
    }
    
}

export default TaskerProfile
