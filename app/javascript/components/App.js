import React, { Component } from "react"
// not sure what this import is for
// import PropTypes from "prop-types"
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from "react-router-dom"

import Header from "./components/Header"
import Home from "./pages/Home"
import ApartmentIndex from "./pages/ApartmentIndex"
import ApartmentShow from "./pages/ApartmentShow"
import ApartmentNew from "./pages/ApartmentNew"
import ApartmentEdit from "./pages/ApartmentEdit"
// import mockApts from "./mockApts"

class App extends Component {
  // create constructor and state object
  constructor(props){
    super(props)
    this.state = {
      // apts: mockApts,
      apartments: []
    }
  }

  // render index with updated apartments array
  componentDidMount(){
    this.apartmentIndex()
  }

  // index fetch functionality
  apartmentIndex = () => {
    fetch("http://localhost:3000/apartments")
    .then(response => {
      return response.json()
    })
    .then(apartmentsArray => {
      this.setState({ apartments: apartmentsArray })
    })
    .catch(errors => {
      console.log("apartmentIndex errors:", errors)
    })
  }

  // create fetch 
  apartmentCreate = (newApartment) => {
    console.log(newApartment)
    newApartment.user_id = this.props.current_user.id
    fetch("http://localhost:3000/apartments", {
      body: JSON.stringify(newApartment),
      headers: {
          "Content-Type": "application/json"
        },
      method: "POST"
      })
      .then(response => response.json())
      .then(() => this.apartmentIndex())
      .catch(errors => console.log("Apartment create errors:", errors))
    }

  // update fetch
  apartmentUpdate = (editApartment, id) => {
    // console.log("apartment:", editApartment)
    // console.log("id:", id)
    fetch(`http://localhost:3000/apartments/${id}`, {
      body: JSON.stringify(editApartment),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json)
    .then(() => this.apartmentIndex)
    .catch(errors => console.log("Apartment update errors:", errors))
  }

  deleteTurtle = (id) => {
    fetch(`http://localhost:3000/apartments/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json)
    .then(() => this.apartmentIndex())
    .catch(errors => console.log("apartment delete errors:", errors))
  }


  render() {
    
    // destructure props 
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props


    return (
      <Router>
        <Header logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_out_route={sign_out_route}
          current_user={current_user}/>

        <Switch>

          <Route exact path="/" component={Home}/>

          <Route path="/apartmentIndex" render={ (props) => <ApartmentIndex apartments={ this.state.apartments } /> }  />

          {/* need to add the delete functionality to the show page. Logic already implemented */}
          {/* alos some type of condition that will only display the apartments that belongs to the current user. has the foreign key. */}
          <Route path="/apartmentShow/:id" render={(props) => {
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment =>apartment.id === +id)
            return <ApartmentShow apartment={ apartment }/> }} />

          <Route path="/apartmentNew" render={(props) => <ApartmentNew apartmentCreate={this.apartmentCreate}/>}
          />

          <Route path="/apartmentEdit/:id" render={(props) =>{
            let id = props.match.params.id
            let apartment = this.state.apartments.find(apartment => apartment.id === +id)
            return<ApartmentEdit apartmentUpdate={this.apartmentUpdate} apartment={apartment} />
          }}
          />     

        </Switch>
      </Router>
    )
  }
}

export default App
