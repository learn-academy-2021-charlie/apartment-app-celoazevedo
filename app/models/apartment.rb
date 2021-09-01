class Apartment < ApplicationRecord
    belongs_to :user
    # add rspec test to apartment model.
    # need to validate additional properties later.
    validates :street, presence: true 
end
