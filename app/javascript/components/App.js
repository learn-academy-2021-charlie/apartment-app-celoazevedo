import React, { Component } from "react"
// not sure what this import is for
// import PropTypes from "prop-types"
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from "react-router-dom"

import Header from "./components/Header"
import ApartmentIndex from "./pages/ApartmentIndex"
import Home from "./pages/Home"

class App extends Component {
  // create constructor and state object
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }

  // render index with updated apartments array
  componentDidMount(){
    this.apartmentIndex()
  }

  // create index fetch functionality
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
          sign_out_route={sign_out_route}/>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/apartmentIndex" render={ (props) => <ApartmentIndex apartments={ this.state.apartments } /> }  />
        </Switch>
      </Router>
    )
  }
}

export default App
