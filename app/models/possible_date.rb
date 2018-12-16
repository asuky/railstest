class PossibleDate < ApplicationRecord
    belongs_to :reservation
    has_one :subscriber
end
