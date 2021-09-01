require 'rails_helper'

RSpec.describe Apartment, type: :model do
  it'should have a street' do
    apartment = Apartment.create(city: 'San Diego', state: 'CA', manager: 'Mr. Boss', email: '1234st@gmail.com', price: '1400', bedrooms: 5, bathrooms: 2, pets: 'yes')
    expect(apartment.errors[:street]).to_not be_empty
  end



end