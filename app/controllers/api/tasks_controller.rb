class Api::TasksController < ApplicationController

    def create
        @task = Task.new(task_category: params[:taskCategory])
        
        p "debugger"
        # p params
        p @task

        # render json: @task
        
        @task.save
        render json: @task

        # if @task.save
        #     render json: @task 
        # else
        #     render json: @task.errors.full_messages, status: 422
        # end
    end

    def show
        @task = Task.order("created_at").last

        p "debugger"
        p @task



        render json: @task
    end

    def update
        @task = Task.order("created_at").last
        
        if params[:taskRequirement]
            @task.update(
                    task_category: params[:taskRequirement][:task_category],
                    location: params[:taskRequirement][:location],
                    specific_location: params[:taskRequirement][:specific_location],
                    description: params[:taskRequirement][:description],
                    estimated_time_req: params[:taskRequirement][:estimated_time_req],
                    vehicle_type: params[:taskRequirement][:vehicle_type],
                )
        end

        if params[:taskerId]
            taskerId = params[:taskerId].to_i
            @task.update(tasker_id: taskerId)
        end

        if params[:taskDate]
            taskDate = params[:taskDate]
            @task.update(scheduled_date: taskDate)
        end

        if params[:taskTime]
            taskTime = params[:taskTime]
            @task.update(scheduled_time: taskTime)
        end

        p 'this is task description'
        p params

        if params[:taskDescription]
            task_description = params[:taskDescription][:description]
            user_id = params[:taskDescription][:userId]

            @task.update(description: task_description, user_id: user_id)
        end

        render json: @task
    end

    def index
        

        user_id = params[:userId].to_i
        
        @tasks = Task.where(user_id: user_id, is_complete: false)


        p 'this is all tasks!'

        p @tasks
        render json: @tasks.as_json(include: :tasker)
        # You need to include associations details in json object through 'include'!
    
    end

    def destroy
        p 'RENDER ME! LETS DELETE SHIT'
        p params

        task_id = params[:taskId]
        
        Task.destroy(task_id)

        render json: task_id
    end

    private

    # def task_description_params
    #     params
    #         .require(:taskDescription)
    #         .permit(
    #             :task_category, 
    #             :location, 
    #             :description, 
    #             :estimated_time_req, 
    #             :specific_location, 
    #             :vehicle_type
    #         )
    # end

end