class AddVehicleTypeToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :vehicle_type, :string
  end
end