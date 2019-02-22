class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :task_categories
      t.string :location
      t.text :description
      t.integer :user_id
      t.integer :tasker_id
      t.string :estimated_time_req
      t.string :scheduled_time
      t.date :scheduled_date
      t.boolean :is_complete, default: false

      t.timestamps
    end

    add_index :tasks, :user_id
    add_index :tasks, :tasker_id
  end
end