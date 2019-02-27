import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import tasksReducer from './tasks_reducer';
import taskersReducer from './taskers_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    tasks: tasksReducer,
    taskers: taskersReducer
});

export default entitiesReducer;