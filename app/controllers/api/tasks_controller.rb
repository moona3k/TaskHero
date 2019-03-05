class Api::TasksController < ApplicationController

    def create
        @task = Task.new(task_params)

        if @task.save
            render json: @task 
        else
            render json: @task.errors.full_messages, status: 422
        end
    end

    private

    def task_params
        params.require(:task).permit(:task_category, :location, :description, :user_id, :tasker_id, :estimated_time_req, :scheduled_time, :scheduled_date, :is_complete, :specific_location, :vehicle_type)
    end

end