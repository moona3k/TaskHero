export const getAllTaskers = taskCategory => {
    return $.ajax({
        url: 'api/users',
        method: 'GET',
        data: taskCategory
    })
}