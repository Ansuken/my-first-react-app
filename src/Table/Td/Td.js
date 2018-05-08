import React, { Component } from 'react';

class Td extends Component {
    
    render() {
        return (
            <React.Fragment>
            <td>{this.props.content}</td>
            </React.Fragment>
        );
    }
}

export default Td;