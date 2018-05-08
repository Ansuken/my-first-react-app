import React, { Component } from 'react';
import MainForm from '../../Form/Form';
import PageTitle from '../../PageTitle/PageTitle';
import Table from '../../Table/Table';

class MainPage extends Component {
  constructor(props) {
      super(props);
      this.state = {tableContent: [
        {id:1, name:'Oscar', lastName:'Benito'},
        {id:2, name:'Andrés', lastName:'Benito'},
        {id:3, name:'Iván', lastName:'Ros'},
        {id:4, name:'Raúl', lastName:'Dacuña'},
        {id:5, name:'Chema', lastName:'Limeres'}
      ]};
  }

  render() {
    return (
        <React.Fragment>
          <PageTitle title="Shitty Form"/>
          <MainForm/>
          <hr />
          <h3>Employee list</h3>
          <hr />
          <Table content={this.state.tableContent}/>
        </React.Fragment>
    );
  }
}

export default MainPage;