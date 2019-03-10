import React from 'react';

class MyTaskView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="my-task-container">
                <div className="my-task-header">
                    <h2>Mounting</h2>
                    <img src="" alt="tasker-profile-img"/>
                </div>
            </div>
        )
    }
};

export default MyTaskView