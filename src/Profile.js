import React, { Component } from 'react';
import './Profile.css';
import Portrait from './img/joel_saucedo.jpg'

class Profile extends Component {
  render() {
    return (
      <div className="profile">
        <img src={Portrait} className="profile_portrait" />
        <h1>Hello World!</h1>
        <span>I am Joel!</span>
        <p>
          I’m a web developer based in Austin, Tx, and on a mission to grow as a developer and as a professional. I am ready
          to offer my analytical, creative and detail-oriented skill set to the industry.
        </p>
        <div className="home-btns">
          <a href="https://github.com/joelcmk" target="_blank" className="button home_button">Check my code</a>
          <a href="img/Saucedo-Joel-Resume.pdf" target="_blank" className="button home_button">My resume</a>
        </div>
      </div>
    )
  }
}

export default Profile;