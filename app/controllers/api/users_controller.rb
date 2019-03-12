class Api::UsersController < ApplicationController

    def index

        p "confirm that ajax hits user index"
        p params

        if params[:taskRequirement]

            task_category = params[:taskRequirement][:taskCategory]
            vehicle_type = params[:taskRequirement][:vehicleType]
            
            @taskers = User.where(is_tasker: true, tasker_skill_type: task_category, vehicle_type: vehicle_type)
            # SELECT * FROM Users WHERE tasks.task_category == users.tasker_skill_type AND tasks.vehicle_type == users.vehicle_type
        end

        
        
        render json: @taskers
        # render 'api/users/index'
        # Jbuilder is used to curate/format data

        # Question: How can I pass information from redux-store to rails controller? I need currentTask.task_category
        # What information does rails controller have access to?
        # > Database/model & rails built-in params
        # > One solution would be to add 'task category' into a query string and shove it in the url?
        
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

    def show

        tasker_id = params[:id].to_i
        @tasker = User.find(tasker_id)

        p 'this is tasker'
        p @tasker

        render json: @tasker
    end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :zipcode, :password)
    end

end