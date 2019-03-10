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
        
        if params[:taskDescription]
            @task.update(
                    task_category: params[:taskDescription][:task_category],
                    location: params[:taskDescription][:location],
                    specific_location: params[:taskDescription][:specific_location],
                    description: params[:taskDescription][:description],
                    estimated_time_req: params[:taskDescription][:estimated_time_req],
                    vehicle_type: params[:taskDescription][:vehicle_type],
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

        render json: @task
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