class Api::UsersController < ApplicationController

    def index

        p "confirm that ajax hits user index"
        p params

        task_category = params[:taskRequirement][:taskCategory]
        vehicle_type = params[:taskRequirement][:vehicleType]
        p "This is the task cateogry!"
        p task_category
        p "This is the vehicle type!"
        p vehicle_type
        
        @taskers = User.where(is_tasker: true, tasker_skill_type: task_category, vehicle_type: vehicle_type)
        # SELECT * FROM Users WHERE tasks.task_category == users.tasker_skill_type AND tasks.vehicle_type == users.vehicle_type

        p "pls render all @taskers" 
        p @taskers.first.first_name

        # Question: How can I pass information from redux-store to rails controller? I need currentTask.task_category
        # What information does rails controller have access to?
        # > Database/model & rails built-in params
        # > One solution would be to add 'task category' into a query string and shove it in the url?
        
        # render 'api/users/index'
        render json: @taskers
        # Jbuilder is used to curate/format data

        # Question: Controller is responsible for generating the output for the given http request
        # If so, shouldn't the controller action be RETURNING a data/object as a response?
        # It seems all controller actions are RENDERING a json view... view != Data/object
        # The 'render' method in controller action takes data from DB & displays it on the view
    end

    def create
        @user = User.new(user_params)

        if @user.save
            login(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :zipcode, :password)
    end

end