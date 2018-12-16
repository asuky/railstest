class Reservation < ApplicationRecord
    has_one :subscriber
    has_many :possible_date
end
