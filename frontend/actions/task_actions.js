import * as TaskUtil from '../util/task_api_util';

export const RECEIVE_TASK_CATEGORY = 'RECEIVE_TASK_CATEGORY';
export const RECEIVE_TASK_DESCRIPTION = 'RECEIVE_TASK_DESCRIPTION';
export const RECEIVE_TASK_DATETIME = 'RECEIVE_TASK_DATETIME';
export const RECEIVE_LATEST_TASK = 'RECEIVE_LATEST_TASK';

const receiveTaskCategory = taskCategory => {
    return ({
        type: RECEIVE_TASK_CATEGORY,
        task_category: taskCategory
    })
};

const receiveLatestTask = task => {
    return ({
        type: RECEIVE_LATEST_TASK,
        task: task
    })
};

const receiveTaskDescription = taskDescription => {
    return ({
        type: RECEIVE_TASK_DESCRIPTION,
        task_description: taskDescription
    })
};

export const receiveTaskDateTime = taskDateTime => {
    return ({
        type: RECEIVE_TASK_DATETIME,
        taskDateTime: taskDateTime
    })
};

export const initializeTask = taskCategory => dispatch => {
    return TaskUtil.postNewTask(taskCategory)
        .then(taskCategory => dispatch(receiveTaskCategory(taskCategory))
        )
};

export const fetchLatestTask = () => dispatch => {
    return TaskUtil.getLatestTask()
        .then(task => dispatch(receiveLatestTask(task))
        )
};

export const updateTaskDescription = taskDescription => dispatch => {
    return TaskUtil.patchTaskDescription(taskDescription)
        .then(taskDescription => dispatch(receiveTaskDescription(taskDescription))
        )
};