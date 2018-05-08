import React, { Component } from 'react';
import MainForm from '../../Form/Form';
import PageTitle from '../../PageTitle/PageTitle';

class MainPage extends Component {
  render() {
    return (
        <React.Fragment>
          <PageTitle title="Shitty Form"/>
          <MainForm/>
        </React.Fragment>
    );
  }
}

export default MainPage;