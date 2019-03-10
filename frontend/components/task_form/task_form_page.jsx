import React from 'react';

import NavBarContainer from '../nav_bar/navBar_container';
import TaskFormHeader from './task_form_header';
import ChooseTaskerContainer from '../task_form/choose_tasker_container';
import { Route, Switch } from 'react-router-dom';

import TaskDescriptionContainer from './task_description_container';
import ConfirmTaskContainer from './task-confirm-container';

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
                    <Route path="/task-form/taskers" component={ChooseTaskerContainer} />
                    <Route path="/task-form/confirm" component={ ConfirmTaskContainer } />
                </Switch>
            </div>
        )
    }

}

export default TaskFormPage;


