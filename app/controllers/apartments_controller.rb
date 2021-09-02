class ApartmentsController < ApplicationController
    # add index method 
    def index
        apartments = Apartment.all
        render json: apartments
    end

    def create
        current_user = User.find(params[:apartment][:user_id]) 
        apartment = current_user.apartments.create(apartment_params)
        if apartment.valid?
            render json: apartment
        else
            render json: apartment.errors, status: 422
        end
    end

    def update 

    end

    
    private
    def apartment_params
        params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets)
    end

end
