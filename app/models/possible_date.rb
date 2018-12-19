class PossibleDate < ApplicationRecord
    belongs_to :reservation
    has_one :subscriber

    def self.vacants(possible_date_id)
        if PossibleDate.exists?(possible_date_id) then
            if PossibleDate.joins(:subscriber).where("possible_dates.id=?", possible_date_id).exists? then
                return false
            else
                return true
            end
        else
            return false
        end
    end
end
