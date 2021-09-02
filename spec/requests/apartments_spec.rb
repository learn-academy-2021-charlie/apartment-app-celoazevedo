require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  let(:user) do
    User.create email: 'mytest@test.com', password: '123456', password_confirmation: '123456'
  end

  # Index
  describe "GET /index" do
    it 'gets all of the apartments' do
      Apartment.create street: '333 The St.', city: 'Salvador', state: 'Bahia', manager: 'Ms. Jah', email: 'jah@email.com', price: '6000', bedrooms: 3, bathrooms: 2, pets: 'no, plz', user_id: user.id

      get '/apartments'

      apartments = JSON.parse(response.body)
      expect(apartments.length).to eq 1
      expect(response).to have_http_status(200)

      apartment = apartments.first
      expect(apartment['street']).to eq '333 The St.'
      expect(apartment['city']).to eq 'Salvador'
      expect(apartment['state']).to eq 'Bahia'
      expect(apartment['manager']).to eq 'Ms. Jah'
      expect(apartment['email']).to eq 'jah@email.com'
    end
  end

  describe "GET /index" do
    it "gets an apartment" do
      Apartment.create street: '333 The St.', city: 'Salvador', state: 'Bahia', manager: 'Ms. Jah', email: 'jah@email.com', price: '6000', bedrooms: 3, bathrooms: 2, pets: 'no, plz', user_id: user.id

      # Make a request
      get '/apartments'

      apartment = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartment.length).to eq 1
    end
  end

  
  describe "POST /create" do
    it "creates a new apartment" do
      apartment_params = {
        apartment:  {
          street: '333 The St.', city: 'Salvador', state: 'Bahia', manager: 'Ms. Jah', email: 'jah@email.com', price: '6000', bedrooms: 3, bathrooms: 2, pets: 'no, plz', user_id: user.id
        }
      }

    post '/apartments', params: apartment_params
    expect(response).to have_http_status(200)
    new_apartment = Apartment.where()
    expect(new_apartment.street).to eq "333 The St."
    expect(new_apartment.bedrooms).to eq 3
    expect(new_apartment.pets).to eq "no, plz"

    end
  end

#  rspec spec/requests/apartments_spec.rb

# Prefix Verb   URI Pattern                         Controller#Action
# apartments GET    /apartments(.:format)           apartments#index
#            POST   /apartments(.:format)           apartments#create
# new_apartment GET    /apartments/new(.:format)    apartments#new
# edit_apartment GET    /apartments/:id/edit(.:format)  apartments#edit
#  apartment GET    /apartments/:id(.:format)        apartments#show
#            PATCH  /apartments/:id(.:format)        apartments#update
#            PUT    /apartments/:id(.:format)        apartments#update
#            DELETE /apartments/:id(.:format)        apartments#destroy


end