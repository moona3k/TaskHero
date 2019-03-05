class Task < ApplicationRecord

    belongs_to :users,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: 'User'

    belongs_to :taskers,
        primary_key: :id,
        foreign_key: :tasker_id,
        class_name: 'User'

end