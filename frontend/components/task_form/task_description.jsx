import React from 'react';

class TaskDescription extends React.Component {
    



    render() {
        return (
            <div>
                <div>
                    <h1>Describe Your Task: ________</h1>
                    <h3>Is _______ not the right task? (Pick another task)</h3>
                </div>
                <div>
                    <div>
                        <h3>YOUR TASK LOCATION</h3>
                        <div>Search: Enter street address</div>
                        <div>Unit or Apt #</div>
                        <button>Continue</button>
                    </div>
                    <div>
                        <h3>TASK OPTIONS</h3>
                        <div>How big is your task?</div>
                        <input type="radio" /><label>Small - Est. 1 hr</label>
                        <input type="radio" /><label>Medium - Est. 2-3 hrs</label>
                        <input type="radio" /><label>Large - Est. 4+ hrs</label>
                        <button>Continue</button>
                    </div>
                    <div>
                        <h3>TELL US THE DETAILS OF YOUR TASK</h3>
                        <div>Start the conversation and tell your Tasker what you need done. This helps us show you only qualified and available Taskers for the job. Don't worry, you can edit this later.</div>
                        <textarea cols="30" rows="10" placeholder="Provide a summary of what you need done for your Tasker. Be sure to include details like the size of your space, any equipment/tools needed, and how to get in."></textarea>
                        <div>If you need two or more Taskers, please post additional tasks for each Tasker needed.</div>
                        <button>See Taskers & Prices</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TaskDescription;