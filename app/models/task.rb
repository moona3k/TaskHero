class Task < ApplicationRecord

    belongs_to :users,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'User',
        optional: true


    belongs_to :taskers,
        primary_key: :id,
        foreign_key: :tasker_id,
        class_name: 'User',
        optional: true

    before_create :set_current_datetime

    def set_current_datetime
        self.scheduled_time = "I'm Flexible"
        self.scheduled_date = Date.new
    end
end