export const postNewTask = taskCategory => {
    return $.ajax({
        url: 'api/tasks',
        method: 'POST',
        data: { taskCategory }
    })
};