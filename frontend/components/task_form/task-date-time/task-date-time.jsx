import React from 'react';

class TaskCalendar extends React.Component {
    constructor(props){
        super(props);
    }

    handleInput(type) {
        return (e) => {
            
            switch (type){

                case 'taskDate':
                    let taskDate = e.target.value;
                    this.props.updateTaskDate(taskDate);

                case 'taskTime':
                    let taskTime = e.target.value;
                    this.props.updateTaskTime(taskTime);
            }
            
            // if (type === 'taskDate'){
            //     let taskDate = e.target.value;
            //     this.props.updateTaskDate(taskDate);
            // } else if (type === 'taskTime'){
            //     let taskTime = e.target.value;
            //     this.props.updateTaskTime(taskTime);
            // }
        }
    }
    

    render() {
        console.log('render taskdate', this.props.taskDate);
        return (
            <div className="date-time-root-container">
                <h2 className="date-time-header"><i className="fa fa-calendar"></i>  TASK DATE & TIME</h2>
                <input 
                    className="date-input-field"
                    type="date"
                    name="taskDate" 
                    onChange={ this.handleInput('taskDate')}
                    min={new Date()} // this doesn't work...
                />
                <br />
                <select onChange={this.handleInput('taskTime')} className="time-input-field">
                    <option value="I'm Flexible">&nbsp;&nbsp;I'm Flexible</option>
                    <option value="Morning (8AM - 12PM)">&nbsp;&nbsp;Morning (8AM - 12PM)</option>
                    <option value="Afternoon (12PM - 4PM)">&nbsp;&nbsp;Afternoon (12PM - 4PM)</option>
                    <option value="Evening (4PM - 8PM)">&nbsp;&nbsp;Evening (4PM - 8PM)</option>
                </select>
                <div className="date-time-footer-note">You can agree on exact start time with your selected Tasker after confirmation</div>

            </div>
        )
    }
}

export default TaskCalendar;