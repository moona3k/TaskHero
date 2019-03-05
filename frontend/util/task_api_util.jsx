export const initializeTask = taskCategory => {
    return $.ajax({
        url: 'api/tasks',
        method: 'POST',
        data: { taskCategory }
    })
};