class AddSpecificLocationToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :specific_location, :string
  end
end
