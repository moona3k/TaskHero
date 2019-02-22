// This component renders all tasks assigned to the logged-in user in /dashboard

import React from 'react';

class MyTaskList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            tasks: [] // task information goes here
        }

    }

    componentDidMount() { // vs. componentWillMount
        ajax_fetchAllUserTasks(user_id) // ajax call
        .then( response => { // return object contains all tasks assigned to user_id
            this.setState(response); // update the local state w / task information
        })
    }

    render() {
        return (
            <div>
                {this.state.tasks.map(task => {
                    <div>
                        {task}
                    </div>
                })}
            </div>    
        )
    }
}

export default MyTaskList;