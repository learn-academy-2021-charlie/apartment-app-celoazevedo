class ApartmentsController < ApplicationController
    # add index method 
    def index
        apartments = Apartment.all
        render json: apartments
    end

    

end
