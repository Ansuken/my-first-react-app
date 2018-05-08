import React, { Component } from 'react';

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