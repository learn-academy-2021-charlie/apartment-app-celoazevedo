import React, { Component } from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from "react-router-dom"
import Header from "./components/Header"

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
      <>
        <Header logged_in={logged_in}
          sign_in_route={sign_in_route}
          sign_out_route={sign_out_route}/>
      </>
    )
  }
}

export default App
