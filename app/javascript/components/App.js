import React from "react"
import PropTypes from "prop-types"
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from "react-router-dom"
import Header from "./components/Header"


class App extends React.Component {
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
      <React.Fragment>
        <Header />
        { logged_in &&
          <div>
            <a href={sign_out_route }>Sign Out</a>
          </div>
        }
        { !logged_in &&
          <div>
            <a href={ sign_in_route }>Sign In</a>
          </div>
        }
      </React.Fragment>
    )
  }
}

export default App
