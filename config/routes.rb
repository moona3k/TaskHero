Rails.application.routes.draw do

  root "static_pages#root"
  # This redirects the localhost:3000 to the 'root' page

  namespace :api, defaults: {format: :json} do
  # HTTP response format: render JSON formatted responses by default
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy]
    resources :tasks, only: [:create, :index, :show, :update, :destroy]
    # Create: bundle up all task-related information to the backend route & save into DB
    # Index: fetch all tasks that belong to logged-in user; '/dashboard' will render all tasks
    # Update: user can edit the task information (ex. date & time)
    # Destory: cancel the task by deleted from DB
  end
end
