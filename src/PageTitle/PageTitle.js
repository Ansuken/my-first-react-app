import React, { Component } from 'react';
import './page-title.css';

class PageTitle extends Component {
  render() {
    return (
        <React.Fragment>
          <h1>{this.props.title}</h1>
          <hr/>
        </React.Fragment>
    );
  }
}

export default PageTitle;