import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import MainPage from './Pages/Main/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Banner/>
        <div className="container main-container">
          <MainPage/>
        </div>
      </div>
    );
  }
}

export default App;
