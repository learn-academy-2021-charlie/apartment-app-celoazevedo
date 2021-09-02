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

    ### Remeber to Add Reactstrap
    - in app/assets/stylesheets
    - rename application.css to application.scss
    - $ bundle add bootstrap
    - $ yarn add reactstrap
    - import to application.scss
        - @import 'bootstrap'

    ### Create Header Component
    - in app/javascript/components/components
    - create test file for header component

    ### Add Enzyme
    - $ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
    - $ yarn jest
    - - in order for Enzyme to work in this app we need to tell it to work only in .js files.
        - so we need to pass in some code to the package.json to specify where it will run.
        ```
        "jest": {
            "roots": [
                "app/javascript/components"
            ]
        }
        ```
## Create apartment index page
- branch: apartmentindex-page

    - created ApartmentIndex page
    - added Route and component call to App.js

    ### Create Home page
    - created Home page
    - added Route and component call to App.js 
- branch: aadd-home-navitem-to-header
    - add home page navlink to header component

## ask if we need to create a folder to put our pages test files in....
    
## 
- branch: updating-readme
    - updated user stories
    - tested sign out link
        - was not working
    - checked config file -- so Devise listen for logout requests vie GET
    ```
    # Find this line:
    config.sign_out_via = :delete
    # and replace it with this:
    config.sign_out_via = :get
    ```
    - NOW signout is working!

## Add functionalities for Read Index
    - branch: apartment-index
        - now we can see a list of all of the apartments and its info in apartmentsIndex page
        - http://localhost:3000/apartmentIndex
    
## Styled header and apartmentindex page
    - branch: styles

## Editing/adding test
    - branch: build-tests
        - Header test pass
        - Home test pass
        - apartmentindex test pass

## Spec test and model validation
    - branch: spec-test
        - add rspec test to apartments_spec.rb
            - 'GET/index' route
            - test pass
        - add rspec and model validation to apartment_spec.rb
            - for now just validating the presence of street property.
            - TODO: add more validations.
    - tests are passing
    ! - Still in this branch
    ## Create rspec test for POST/create route - commented out!
     - create show page
     - create mockApts.js file to work with show page.
     - add router to app js - show page is working wiht mock data
     - show page is working without mock data. now able to display data from backend
     - create test for apartmentShow.js
        - test pass
    
## Create/POST functionality
    - branch: create
        - steps:
            - create only if you are logged in
            - add validation for presence of attributes
            - add model spces for validation
            - create ApartmentNew page
            - user can add an appartment
    CREATE fetch
    As a developer, I can update the createNewCat method to post information to the database

    As a user, I can create a new apartment

    As a user, I can see my new apartment in the apartment list
    
     CREATE endpoints
    As a developer, I can add a create request spec to my application

    As a developer, I can add a create endpoint to my application

    - created rspec test for POST / create endpoint, route
    - create controller method for to create a new apartment 
    - rspec test pass!

    - was getting a error "Unexpected token", related to JSON file comming back. 
        - added to applicaiton controller 
        skip_before_action :verify_authenticity_token
    

    TODO - Add test for ApartmentIndex page!
        - fix test for Create
        - add test for Post

    


## Update  
    - branch: update
        - update endpoints
            - Add a request spec for update
            - Add an update controller method
        - update functinality
            - As a user, I can fill out a form to edit an existing cat
            - As a developer, I can add onChange and value attributes to each input

            - As a developer, I can pass the form data to App.js on submit

            - As a developer, I can see my updated cat logged in the console on submit

            - As a user, I can see a button on my show page that will take me to the edit page for that particular cat

            - As a user, I can be routed to the show page after I submit the edited cat form

            - As a developer, I have test coverage on my update page


    - added test for apartmentNew page
    - 

## Delete Func
    - branch:
        - Add a delete request spec
        - Add a destroy controller method





!!!!!!
TDD stands for Test Driven Development

Determine a feature or behavior to implement.
Create the describe and it blocks pertaining to the that feature only.
Put in expects in one it block to assert how the objects should behave.
Run the tests and see that they fail (the red part of red-green refactor).
Implement just enough of the software to make the tests pass (the green part of red-green refactor).
Add more expects and repeat the process, until all tests pass and all features are implemented.
!!!!!!


## Lets review the User stories!!!

## User Stories
    ### Devise and Header Stories
        X  Story: As a un-registered guest, I can go to registration page with a form and register as a new user
    - Devise, navigation from Header component
        X  Story: As a registered user who has not logged in, I can go to a login page
    - Devise, navigation from Header component
        X  Story: As a logged in user, I should be able to log out
    - Devise, navigation from Header component
        X Story: As an un-registered guest on the website, I can see a header element at the top of each page containing navigation to the other pages
    
    ### Header component
        Process:
        Header component (done)
        Styling (added to the TODO items)
        Navigation to Devise (done)
        Navigation Index (done)
        Create index page, basic code
        Define the route to index page
        Testing the Header
        - $ yarn add jest
        - $ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
        Add this to the package.json:
        ```
        "jest": {
            "roots": [
                "app/javascript/components"
            ]
        }
        ```
    
    ###### TODO: Styling on the header, appartmentIndex
    
    # Read
    Story: As an un-registered guest on the website, I can go to a web page and see a list of available apartments. Apartments have: a street designation, a city, state, a manager's name, manager's contact email, monthly rental price, bedrooms, bathrooms, and whether they allow pets
    
        # Index
        - index page is displaying a list of apartments.
        Story: As an un-registered guest on the website, I can click on an apartment to view its details
        
        # Show
        
    # Create
    Story: As a logged in user, I can go to a new apartment page with a form and create a new apartment
    Create, only if you are logged_in, Desive
    
    # Update
    Story: As a logged in user, I can edit the information for any apartment I have created, but I cannot edit the information for apartments that belong to someone else
    Edit, only apartments with the foreign key of the current user


## Message from Sarah on Testing Images!
Sarah  2:13 PM
If you have images in your app you will need to mock them. In package.json add this to the previous code snippet:
  "jest": {
    "roots": [
      "app/javascript/components"
    ],
  "moduleNameMapper": {
      "\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>app/javascript/components/fileMock.js",
      "\\.(css|less)$": "<rootDir>app/javascript/components/fileMock.js"
    }
  }

Then you can create a fileMock in the same level as App.js called fileMock.js
Add this code snippet to replace the image in the tests.
let mockPic = "this is mock pic"
export default mockPic
######
