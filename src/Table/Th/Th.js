import React, { Component } from 'react';

class Th extends Component {

    render() {
        return (
            <React.Fragment>
                <th>{this.props.content}</th>
            </React.Fragment>
        );
    }
}

export default Th;