class AddPropertiesToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :profile_img, :string, :default => "https://bit.ly/2tvrRgG"
    add_column :users, :is_tasker, :boolean, null:false, :default => false
    add_column :users, :hourly_rate, :decimal # ActiveRecord data type :float vs :decimal
    add_column :users, :tasker_aboutme, :text
    add_column :users, :tasker_rank, :string # 3 types (regular / elite tasker / great value)
    add_column :users, :tasker_skill_type, :string # same as task_categories
    add_column :users, :vehicle_type, :string # 3 options (none / truck / car)
    add_column :users, :num_completed_tasks, :integer # number of completed tasks
    add_column :users, :reviews_rating, :integer # positive review score
    add_column :users, :reviews_num, :integer # number of reviews
  end
end