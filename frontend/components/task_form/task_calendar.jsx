import React from 'react';

class TaskCalendar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            taskDate: '',
            taskTime: ''
        }

    }

    handleDateInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
            this.props.receiveDateTime(this.state);
            
            // this.props.setDateTime({[type]: e.target.value})
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
                    onChange={ this.handleDateInput('taskDate')}
                    min={new Date()} // this doesn't work...
                />
                <br />
                <select onChange={ this.handleDateInput('taskTime')}>
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