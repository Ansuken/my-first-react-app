import React, { Component } from 'react';
import './header.css';
import Logo from '../Logo/Logo';
import { 
    Navbar,
    Nav,
    NavItem,
    NavLink, } from 'reactstrap';

class Header extends Component {
    render() {
        return(
            <React.Fragment>
                <Navbar className="navbar-color" light expand="md">
                    <div className="container">
                        <Logo/>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/my-profile/">Mi perfil</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/logout/">Desconectar</NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;