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
        }
    }

    render() {
        // console.log(this.state);
        return (
            <div>
                <h2><i className="fa fa-calendar"></i> TASK DATE & TIME</h2>
                <input 
                    type="date"
                    name="taskDate" 
                    onChange={ this.handleInput('taskDate')}
                    min={new Date()} // this doesn't work...
                />
                <br />
                <select onChange={this.handleInput('taskTime')}>
                    <option value="I'm Flexible">I'm Flexible</option>
                    <option value="Morning (8AM - 12PM)">Morning (8AM - 12PM)</option>
                    <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                    <option value="Evening (4PM - 8PM)">Evening (4PM - 8PM)</option>
                </select>

            </div>
        )
    }
}

export default TaskCalendar;