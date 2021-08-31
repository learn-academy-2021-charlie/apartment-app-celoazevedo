# README

## Setup
    ## Create rails app
    - $ rails new apartment_app -d postgresql -T
    - $ cd apartment_app
    ## Create database
    - $ rails db:create
    ## Connected to github
## Add Devise
- Branch: add-devise
    ### First we need to add/install Rspec:
    - $ bundle add rspec-rails
    - $ rails generate rspec:install
    ### Adding Devise
    - $ bundle add devise
    - $ rails generate devise:install
        - check out in the console the info that devise provides
    - $ rails generate devise User
    - $ rails db:migrate 
        - so that we can update our schema.     
    #### Configuration to allow user to reset password through email
    In the config/environments/development.rb file, add the following code at the end of the previous code inside the file:
    ```
    config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
    ```
    ### Now we can make a get request to (the users sign up page):
        - http://localhost:3000/users/sign_up
        And we can signup as a user!
    
    Lets sign up.
    test@gmail.com
    testtest

    - right new when we sign up it redirects to the landing page. Check in the rails console if there is a user stored in the database.
        - $ rails c
        - $ User.all

## Add Appartment Model
- branch: add-apartment
    ### Create apartment Model:
    - The Devise User model is going to have an association with the Apartment model
    - $ rails g resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string user_id:integer
    - $ rails db:migrate

    ### Create Association between Apartment and User
    - app/models/apartment.rb
    ```
    class Apartment < ApplicationRecord
        belongs_to :user
    end
    ```
    - app/models/user.rb
    ```
    class User < ApplicationRecord
        # Include default devise modules. Others available are:
        # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
        devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
        has_many :apartments
    end
    ```

    ### Now lets check if we can create a apartment for the User that we have (when we signed up earlier...)
    - $ rails c
    - $ test_user = User.where(email: 'test@gmail.com').first
    - test_user.apartments.create street: '123 street',  .....
    - check if it was successfully created!!!

    ### Create seed file with data for User and Apartment
    - app/db/seed.rb
    - in seed file we created 2 apartments for the user with email: 'test2@gmail.com'

## Add REACT!
- branch: add-react
    - $ bundle add react-rails
    - $ rails webpacker:install
    - $ rails webpacker:install:react
    - $ rails generate react:install
    - $ rails generate react:component App
        - bring in the Parent Component
    - $ rails generate controller Home
        - to hookup App.js so it can be rendered in the view

    ### Set up component view
    - in app/views/home/index.html.erb
    ```
        <%= react_component "App", {
        logged_in: user_signed_in?,
        current_user: current_user,
        new_user_route: new_user_registration_path,
        sign_in_route: new_user_session_path,
        sign_out_route: destroy_user_session_path
        } %>
    ```
    - Up here the keys that we are passing are the aliases routes. Now we can access the keys in the React side of the app.

    ### Set up Routes and Constrains
    - to clearly separate Rails routing responsabilities
    - to direct html traffic to the 'home#index' route 
    - in config/routes.rb
    ```
    Rails.application.routes.draw do
        resources :apartments
        devise_for :users
        get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
        root 'home#index'
    end
    ```

    ### Create directories inside app/javascript/components
    - assets, components, pages

    ### Login/Logout
    - when the user navigates, it uses a token given by Devise. When the user logs out, the token needs to be destroyed. Out of the box Devise uses a delete action. We will config so it does on a GET request.
    - config so Devise listen for logout requests vie GET
    - in config/initializers/devise.rb
    ```
    # Find this line:
    config.sign_out_via = :delete
    # and replace it with this:
    config.sign_out_via = :get
    ```
    - use conditional rendering to display the appropriate link depending on if the user is logged in or logged out.
    - in app/javascript/components/App.js
    
    ### Lets Set up our React Router
    - react router dom will give us the ability to navigate between pages.
    - $ yarn add react-router-dom
    - in src/App.js
    ```
    import {
        BrowserRouter as Router,
        Route,
        Switch
    } from 'react-router-dom'
    ```

    ### Create Header Component
    - in app/javascript/components/components
    - 




### Got this message after running - $ rails generate devise:install
learnacademy@LEARNs-Air apartment_app % rails generate devise:install
Running via Spring preloader in process 2071
      create  config/initializers/devise.rb
      create  config/locales/devise.en.yml
===============================================================================

Depending on your application's configuration some manual setup may be required:

  1. Ensure you have defined default url options in your environments files. Here
     is an example of default_url_options appropriate for a development environment
     in config/environments/development.rb:

       config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

     In production, :host should be set to the actual host of your application.

     * Required for all applications. *

  2. Ensure you have defined root_url to *something* in your config/routes.rb.
     For example:

       root to: "home#index"
     
     * Not required for API-only Applications *

  3. Ensure you have flash messages in app/views/layouts/application.html.erb.
     For example:

       <p class="notice"><%= notice %></p>
       <p class="alert"><%= alert %></p>

     * Not required for API-only Applications *

  4. You can copy Devise views (for customization) to your app by running:

       rails g devise:views
       
     * Not required *

===============================================================================