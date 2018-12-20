class Reservation < ApplicationRecord
    has_many :possible_date

    def self.get_list
        return Reservation.left_joins({:possible_date => :subscriber}).select("reservations.id as resid, reservations.name as resname, reservations.description as resdesc, possible_dates.id as dateid, possible_dates.possible_date as posdate, subscribers.id as subid")
    end

end
