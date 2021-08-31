# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = [
    {
        email: 'test2@gmail.com',
        password: 'test123',
        password_confirmation: 'test123'
    },
    {
        email: 'test3@gmail.com',
        password: 'test123',
        password_confirmation: 'test123'
    },
    {
        email: 'test4@gmail.com',
        password: 'test123',
        password_confirmation: 'test123'
    }
]

user.each do |value|
    User.create value
end

apartments = [
    {
        street: '1234 St.',
        city: 'San Diego',
        state: 'CA',
        manager: 'Mr. Boss',
        email: '1234st@gmail.com',
        price: '1400',
        bedrooms: 5,
        bathrooms: 2,
        pets: 'yes'
    },
    {
        street: '456 St.',
        city: 'Chula Vista',
        state: 'CA',
        manager: 'Mr. Man',
        email: '456st@gmail.com',
        price: '2000',
        bedrooms: 7,
        bathrooms: 1,
        pets: 'no cats'
    }

]

# remember that we created a user when we signed up while testing devise

first_user = User.where(email: 'test2@gmail.com').first

apartments.each do |value|
    first_user.apartments.create value
end