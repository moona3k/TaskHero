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
                    <button className="choose-tasker-button" onClick={() => this.chooseTasker()}>Select & Continue</button>
                </div>

                <div className="tasker-text-container">
                    <div className="tasker-name-rate-box">
                        <div className="tasker-name">{this.props.first_name} {this.props.last_name}</div>
                        <div className='tasker-hourly-rate'>${this.props.hourly_rate}/hr</div>
                    </div>
                    <div className="tasker-stats"><i className="far fa-check-circle"></i> {this.props.num_completed_tasks} {this.props.task_category} Tasks</div>
                    <div className="tasker-stats"><i className="far fa-star"></i> {this.props.reviews_rating}% Positive Reviews</div>
                    <div className="tasker-stats"><i className="far fa-check-circle"></i> {this.props.reviews_num} Reviews</div>
                    <div className="tasker-stats"><i className="fas fa-car"></i> Vehicle: {this.props.vehicle_type}</div>
                    <div className="tasker-profile-box-bottom">
                        <span className="how-can-i-help">How I can help:</span>
                        <p className="tasker-about-me">{this.props.aboutme}</p>
                    </div>
                    <br />
                </div>
            </div>
        )
    }
    
}

export default TaskerProfile
