class Apartment < ApplicationRecord
    belongs_to :user
    # add rspec test to apartment model.
    # need to validate additional properties later.
    validates :street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, presence: true 
end
