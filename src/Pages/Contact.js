import React, { Component } from 'react';
import './Contact.css';
import Footer from '../Footer'

class Contact extends Component {
  state = {
    active: false,
  }

  render() {
    return (
      <div className="contact">
        <div>
          <h1>Contact</h1>
          <p><span>Like what you see? Let's get in touch and see how I can help you!</span> Message me on: </p>
          <div><a href="https://www.linkedin.com/in/joel-saucedo-71683b138/">Linkedin</a></div>
          <div><a href="mailto:joelcmk@gmail.com">joelcmk@gmail.com</a></div>
          <div><a href="https://medium.com/@joelcmk/">Medium</a></div>
        </div>
        <Footer active={this.state.active} />
      </div >
    )
  }
}

export default Contact