import React from 'react';

import NavBarContainer from '../nav_bar/navBar_container';
import TaskFormHeader from './task_form_header';
// import ChooseTaskerContainer from '../task_form/choose_tasker_container';
import { Route, Switch } from 'react-router-dom';

import TaskDescriptionContainer from './task_description_container';

class TaskFormPage extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div>
                <NavBarContainer />
                <TaskFormHeader />
                <Switch>
                    <Route path="/task-form/new" component={ TaskDescriptionContainer } />
                    {/* <Route path="/task-form/tasker" component={ TaskFormTasker } />
                    <Route path="/task-form/booking" component={ TaskFormBooking } /> */}
                </Switch>
            </div>
        )
    }

}

export default TaskFormPage;


