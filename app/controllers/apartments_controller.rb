class ApartmentsController < ApplicationController
    # add index method 
    def index
        apartments = Apartment.all
        render json: apartments
    end

    def create 
        apartment = Apartment.create(apartment_params)
        # render json: apartment
        if apartment.valid?
            render json: apartment
        else
            render json: apartment.errors, status: 422
        end
    end

    
    private
    def apartment_params
        params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :user_id)
    end

end
