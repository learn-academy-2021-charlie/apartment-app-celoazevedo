import React, { Component } from 'react'
import { Nav, NavItem, Navbar, NavbarBrand } from 'reactstrap'

class Header extends Component {
    render() {
        const {
            sign_in_route,
            sign_out_route,
            logged_in
        } = this.props

        return (
            <>
                <Navbar className="nav-bar" color="dark" light expand="md">
                    <NavbarBrand className="mr-auto" href="/">The Apartment App</NavbarBrand>
                    <Nav>
                        <NavItem>
                            <a className="nav-link" href="/">Home</a>
                        </NavItem>
                        <NavItem>
                            {logged_in && <a href="apartmentIndex" className="nav-link">See Apartments</a>}
                        </NavItem>
                        <NavItem className="nav-sign-link">
                            {logged_in && <a href="apartmentNew" className="nav-link">Add Apartment</a>}
                        </NavItem>
                        <NavItem className="nav-sign-link">
                            {logged_in && <a href="apartmentProtected" className="nav-link">My Apartments</a>}
                        </NavItem>
                        <NavItem className="nav-sign-link">
                            {logged_in && <a href={sign_out_route} className="nav-link">Sign Out</a>}
                            {!logged_in && <a href={sign_in_route} className="nav-link">Sign In</a>}
                        </NavItem>
                    </Nav>
                </Navbar>
            </>
        );
    }
}

export default Header;
