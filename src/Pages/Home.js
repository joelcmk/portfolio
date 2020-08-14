import React, { Component } from 'react';
import '../App.css';
import Profile from '../Profile';
import Work from '../Work'
import WorkCard from '../WorkCard';
import Footer from '../Footer'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Profile />
        <WorkCard />
        <Work />
        <Footer />
      </div>
    )
  }
}

export default Home;
