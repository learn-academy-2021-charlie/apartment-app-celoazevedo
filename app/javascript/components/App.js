import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from "react-router-dom"
import Header from "./components/Header"
import ApartmentIndex from "./pages/ApartmentIndex"
import Home from "./pages/Home"

class App extends Component {
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
          <Route path="/apartmentIndex" component={ApartmentIndex}/>
        </Switch>
      </Router>
    )
  }
}

export default App
