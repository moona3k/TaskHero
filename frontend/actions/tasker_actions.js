import * as TaskerUtil from '../util/taskers_api_util';

export const RECEIVE_ALL_TASKERS = 'RECEIVE_ALL_TASKERS';

const receiveAllTaskers = taskers => {
    return ({
        type: RECEIVE_ALL_TASKERS,
        taskers: taskers
    })
}

export const fetchAllTaskers = taskCategory => dispatch => {
    return TaskerUtil.getAllTaskers(taskCategory)
    // SELECT * FROM users WHERE tasks.task_category === users.tasker_skill_type
        .then(taskers => dispatch(receiveAllTaskers(taskers)));
}