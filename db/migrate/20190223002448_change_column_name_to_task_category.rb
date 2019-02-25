class ChangeColumnNameToTaskCategory < ActiveRecord::Migration[5.2]
  def change
    rename_column :tasks, :task_categories, :task_category
  end
end
