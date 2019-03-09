class User < ApplicationRecord

    attr_reader :password

    validates :first_name, :last_name, :email, :zipcode, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    after_initialize :ensure_session_token

    has_many :tasks,
        primary_key: :id,
        foreign_key: :tasker_id,
        class_name: 'Task'



    # 'user.tasks' - return all tasks requested by user
    # 'task.tasker_id' - return the user/tasker assigned to task
    # 'task.user_id' - return the user who requested the task

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)

        if user && user.valid_password?(password)
            user
        else
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def valid_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save!
        self.session_token
    end

    private
    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end
end
