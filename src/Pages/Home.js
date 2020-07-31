import React, { Component } from 'react';
import '../App.css';
import Profile from '../Profile';
import Work from '../Work'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Profile />
        <Work />
      </div>
    )
  }
}

export default Home;
