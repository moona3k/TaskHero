import * as TaskUtil from '../util/task_api_util';

export const RECEIVE_TASK_CATEGORY = 'RECEIVE_TASK_CATEGORY';
export const RECEIVE_TASK_REQUIREMENT = 'RECEIVE_TASK_REQUIREMENT';
export const RECEIVE_LATEST_TASK = 'RECEIVE_LATEST_TASK';
export const RECEIVE_TASKER_ID = 'RECEIEVE_TASKER_ID';
export const RECEIVE_TASK_DATE = 'RECEIVE_TASK_DATE';
export const RECEIVE_TASK_TIME = 'RECEIVE_TASK_TIME';
export const RECEIVE_TASK_DESCRIPTION = 'RECEIVE_TASK_DESCRIPTION';
export const RECEIVE_ALL_TASKS = 'RECEIVE_ALL_TASKS';
export const DELETE_SELECTED_TASK = 'DELETE_SELECTED_TASK';

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

const receiveTaskRequirement = taskRequirement => {
    return ({
        type: RECEIVE_TASK_REQUIREMENT,
        taskRequirement: taskRequirement
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
};

const receiveTaskTime = taskTime => {
    return ({
        type: RECEIVE_TASK_TIME,
        taskTime
    })
};

const receiveTaskDescription = taskDescription => {
    return ({
        type: RECEIVE_TASK_DESCRIPTION,
        taskDescription
    })
}

const receiveAllTasks = tasks => {
    return ({
        type: RECEIVE_ALL_TASKS,
        tasks
    })
}

const removeSelectedTask = (taskId) => {
    return ({
        type: DELETE_SELECTED_TASK,
        taskId
    })
}

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

export const updateTaskRequirement = taskRequirement => dispatch => {
    return TaskUtil.patchTaskRequirement(taskRequirement)
        .then(taskRequirement => dispatch(receiveTaskRequirement(taskRequirement))
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

export const updateTaskDescription = taskDescription => dispatch => {
    return TaskUtil.patchTaskDescription(taskDescription)
        .then(taskDescription => dispatch(receiveTaskDescription(taskDescription))
        )
};

export const fetchAllTasks = userId => dispatch => {
    return TaskUtil.getAllTasks(userId)
        .then( tasks => dispatch(receiveAllTasks(tasks))
        )
};

export const deleteSelectedTask = taskId => dispatch => {
    return TaskUtil.deleteSelectedTask(taskId)
        .then((taskId) => dispatch(removeSelectedTask(taskId))
        )
};