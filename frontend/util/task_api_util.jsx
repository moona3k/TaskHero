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

export const patchTaskRequirement = taskRequirement => {
    return $.ajax({
        url: `api/tasks/${taskRequirement.id}`,
        method: 'PATCH',
        data: { taskRequirement }
    })
};

export const patchTaskerId = taskerId => {
    return $.ajax({
        url: `api/tasks/${taskerId.id}`,
        method: 'PATCH',
        data: { taskerId }
    })
};

export const patchTaskDate = taskDate => {
    return $.ajax({
        url: `api/tasks/${taskDate.id}`,
        method: 'PATCH',
        data: { taskDate }
    })
};

export const patchTaskTime = taskTime => {
    return $.ajax({
        url: `api/tasks/${taskTime.id}`,
        method: 'PATCH',
        data: { taskTime }
    })
};

export const patchTaskDescription = taskDescription => {
    return $.ajax({
        url: `api/tasks/${taskDescription.id}`,
        method: 'PATCH',
        data: { taskDescription }
    })
};

export const getAllTasks = userId => {
    return $.ajax({
        url: 'api/tasks',
        method: 'GET',
        data: { userId }
    })
};

export const deleteSelectedTask = taskId => {
    return $.ajax({
        url: `/api/tasks/${taskId}`,
        method: 'DELETE',
        data: { taskId }
    })
};