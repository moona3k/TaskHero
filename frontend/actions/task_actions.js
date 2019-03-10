import * as TaskUtil from '../util/task_api_util';

export const RECEIVE_TASK_CATEGORY = 'RECEIVE_TASK_CATEGORY';
export const RECEIVE_TASK_DESCRIPTION = 'RECEIVE_TASK_DESCRIPTION';
export const RECEIVE_LATEST_TASK = 'RECEIVE_LATEST_TASK';
export const RECEIVE_TASKER_ID = 'RECEIEVE_TASKER_ID';
export const RECEIVE_TASK_DATE = 'RECEIVE_TASK_DATE';
export const RECEIVE_TASK_TIME = 'RECEIVE_TASK_TIME';


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

const receiveTaskerId = id => {
    return ({
        type: RECEIVE_TASKER_ID,
        id: id
    })
};

const receiveTaskDate = taskDate => {
    return ({
        type: RECEIVE_TASK_DATE,
        taskDate
    })
}

const receiveTaskTime = taskTime => {
    return ({
        type: RECEIVE_TASK_TIME,
        taskTime
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

export const updateTaskerId = taskId => dispatch => {
    return TaskUtil.patchTaskerId(taskId)
        .then(taskId => dispatch(receiveTaskerId(taskId))
        )
};

export const updateTaskDate = taskDate => dispatch => {
    return TaskUtil.patchTaskDate(taskDate)
        .then(taskDate => dispatch(receiveTaskDate(taskDate))
        )
};

export const updateTaskTime = taskTime => dispatch => {
    return TaskUtil.patchTaskTime(taskTime)
        .then(taskTime => dispatch(receiveTaskTime(taskTime))
        )
};