class ReservationsController < ApplicationController

    def show
        render :json => Reservation.get_list
    end
end
