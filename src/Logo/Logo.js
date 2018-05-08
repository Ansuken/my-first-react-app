import React, { Component } from 'react';
import logo from '../assets/imgs/logo.png';

class Logo extends Component {
    render() {
        return(
            <React.Fragment>
                <a href="/" className="logo">
                    <img alt="datio" src={logo}/>
                </a>
            </React.Fragment>
        );
    }
}

export default Logo;