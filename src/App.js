import React, { Component } from 'react';
import './App.css';
import Header from "./Header";
import Footer from './Footer';
import Profile from './Profile';
import Work from './Work'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Profile />
        <Work />
        <Footer />

      </div>
    )
  }
}

export default App;
