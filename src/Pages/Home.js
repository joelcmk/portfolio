import React, { Component } from 'react';
import '../App.css';
import Profile from '../Profile';
import Work from '../Work'
import WorkCards from '../WorkCards';
import Footer from '../Footer'


class Home extends Component {

  render() {
    return (
      <div className="Home">
        <Profile />
        <WorkCards />
        <Work />
        <Footer />
      </div>
    )
  }
}

export default Home;
