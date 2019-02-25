export const RECEIVE_TASK_CATEGORY = 'RECEIVE_TASK_CATEGORY';
export const RECEIVE_TASK_DESCRIPTION = 'RECEIVE_TASK_DESCRIPTION';

export const receiveTaskCategory = taskCategory => {
    return ({
        type: RECEIVE_TASK_CATEGORY,
        task_category: taskCategory
    })
}

export const receiveTaskDescription = taskDescription => {
    return ({
        type: RECEIVE_TASK_DESCRIPTION,
        task_description: taskDescription
    })
}