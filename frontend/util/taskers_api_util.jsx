// GET req to fetch all taskers 
// SELECT * FROM users WHERE tasks.task_category === users.tasker_skill_type
// && tasks.vehicle_type === users.vehicle_type

export const getAllTaskers = taskRequirement => {
    return $.ajax({
        url: 'api/users',
        method: 'GET',
        data: { taskRequirement }
    })
}

export const getAssignedTaskers = taskerId => {
    return $.ajax({
        
    })
}