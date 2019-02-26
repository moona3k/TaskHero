import React from 'react';

class ChooseTasker extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        // componentWillMount vs. componentDidMount
        // General rule of thumb: Use WillMount when you need to fetch initial state
        // Use DidMount if you need to regularly update state

        // Fetch all taskers where 'tasks.task_category === users.tasker_skill_type'

        

    }

    render() {
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
                </div>
                
            </div>
        )
    }
}

export default ChooseTasker;