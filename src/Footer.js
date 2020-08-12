import React, { Component } from "react";
import "./Footer.css"
import Github from './img/github.svg';
import Twitter from './img/twitter.svg';
import Linkedin from './img/linkedin.svg';
import Mail from './img/mail.svg'

class Footer extends Component {
  state = {
    active: true,
  }



  render() {

    return (
      <div className={window.location.pathname === '/contact' ? "contact_footer page_footer" : "page_footer"}>
        <p>Find me on</p>
        <div className="social-media">
          <a href="https://github.com/joelcmk"><img src={Github} /> </a>
          <a href="https://twitter.com/joelcmk"><img src={Twitter} /></a>
          <a href="https://www.linkedin.com/in/joel-saucedo-71683b138/"><img src={Linkedin} /></a>
          <a href="mailto:joelcmk@gmail.com"><img src={Mail} /></a>
        </div>
      </div>
    )
  }
}

export default Footer;