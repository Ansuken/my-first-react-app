import React, { Component } from 'react';
import Td from '../Td/Td'

class Tr extends Component {

    render() {
        return (
            <React.Fragment>
            <tr>
                <Td content={this.props.content.id}/>
                <Td content={this.props.content.name}/>
                <Td content={this.props.content.lastName}/>
            </tr>
            </React.Fragment>
        );
    }
}

export default Tr;