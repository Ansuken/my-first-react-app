import React, { Component } from 'react';
import Th from './Th/Th';
import Tr from './Tr/Tr';

class Table extends Component {

    render() {
        return (
            <React.Fragment>
                <table className="table table-dark">
                <thead>
                    <tr>
                        <Th content='id' />
                        <Th content='Name' />
                        <Th content='Last name' />
                    </tr>
                </thead>
                <tbody>
                    {this.props.content.map(function(user,i){
                        return <Tr key={i} content={user} />
                    })}
                </tbody>
                </table>
            </React.Fragment>
        );
    }
}

export default Table;