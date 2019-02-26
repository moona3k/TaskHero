// GET req to fetch all taskers 
// SELECT * FROM users WHERE tasks.task_category === users.tasker_skill_type

export const getAllTaskers = taskCategory => {
    return $.ajax({
        url: 'api/users',
        method: 'GET',
        data: taskCategory
    })
}