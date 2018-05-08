import React, { Component } from 'react';
import './header.css';
import { 
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, } from 'reactstrap';

class Header extends Component {
    render() {
        return(
            <React.Fragment>
                <Navbar className="navbar-color" light expand="md">
                    <NavbarBrand href="/">datio</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Item 1</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Item 2</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;