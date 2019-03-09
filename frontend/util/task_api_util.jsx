export const postNewTask = taskCategory => {
    return $.ajax({
        url: 'api/tasks',
        method: 'POST',
        data: { taskCategory }
    })
};

export const getLatestTask = () => {
    return $.ajax({
        url: 'api/tasks/:id',
        method: 'GET'
    })
};

export const patchTaskDescription = taskDescription => {
    return $.ajax({
        url: `api/tasks/${taskDescription.id}`,
        method: 'PATCH',
        data: { taskDescription }
    })
};