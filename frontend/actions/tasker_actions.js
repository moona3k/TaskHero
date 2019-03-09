import * as TaskerUtil from '../util/taskers_api_util';

export const RECEIVE_ALL_TASKERS = 'RECEIVE_ALL_TASKERS';
export const RECEIVE_TASKER = 'RECEIVE_TASKER';

const receiveAllTaskers = taskers => {
    return ({
        type: RECEIVE_ALL_TASKERS,
        taskers: taskers
        // 'taskers' data will be fetched via ajax call to backend
    })
}

export const fetchAllTaskers = taskRequirement => dispatch => {
    return TaskerUtil.getAllTaskers(taskRequirement)
    // Make GET request via ajax call to fetch all taskers who meet the requirement 
    // The rails controller is responsible for the SQL query into the DB to fetch the taskers
        .then(taskers => dispatch(receiveAllTaskers(taskers)));
        
        // 'taskers' is the return object from the ajax call
        // receiveAllTaskers(taskers) will generate an action that contain information to update the redux-store
        // this action POJO is sent to redux-store via the 'dispatch' method
}

export const receiveTasker = selectedTasker => {
    return ({
        type: RECEIVE_TASKER,
        selectedTasker: selectedTasker
    })
};