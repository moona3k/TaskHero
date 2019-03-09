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

        @task.update(
            task_category: params[:taskDescription][:task_category],
            location: params[:taskDescription][:location],
            specific_location: params[:taskDescription][:specific_location],
            description: params[:taskDescription][:description],
            estimated_time_req: params[:taskDescription][:estimated_time_req],
            scheduled_time: params[:taskDescription][:scheduled_time],
            scheduled_date: params[:taskDescription][:scheduled_date],
            vehicle_type: params[:taskDescription][:vehicle_type],
            user_id: params[:taskDescription][:user_id],
            tasker_id: params[:taskDescription][:tasker_id],
        )

        p "after update why is this hit???"
        p @task

        render json: @task
    end

    private

    def task_params
        params.require(:task).permit(:task_category, :location, :description, :user_id, :tasker_id, :estimated_time_req, :scheduled_time, :scheduled_date, :is_complete, :specific_location, :vehicle_type)
    end

end