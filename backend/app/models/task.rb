class Task < ApplicationRecord

    validates :desc, presence: true
    validates :time, presence: true

end