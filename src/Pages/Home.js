import React, { Component } from 'react';
import '../App.css';
import Profile from '../Profile';
import Work from '../Work'
import Footer from '../Footer'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Profile />
        <Work />
        <Footer />
      </div>
    )
  }
}

export default Home;
