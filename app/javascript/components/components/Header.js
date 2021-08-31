import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Nav, NavItem } from 'reactstrap'

class Header extends Component {
    render() {
        const {
            sign_in_route,
            sign_out_route,
            logged_in
        } = this.props

        return (
            <>
            <header>
                <h1>The Header</h1>
                <Nav>
                    <NavItem>
                        <NavLink to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        {logged_in && <a href={sign_out_route} className="nav-link">Sign Out</a>}
                        {!logged_in && <a href={sign_in_route} className="nav-link">Sign In</a>}
                    </NavItem>
                </Nav>
            </header>
            </>
        );
    }
}

export default Header;
