import React, { Component } from 'react';
import Texas from '../img/texas.svg'
import './About.css'
import Footer from '../Footer'

class About extends Component {
  render() {
    return (
      <div className="Home">
        <div class="about">
          <h1>Hi, I am Joel</h1>
          <p>I’m a front-end web developer based in Austin, TX. I have extensive experience in customer service, the
            importance of small details, accuracy, and quality control. Qualities that are indispensable in the tech industry.
    </p>
          <p>I moved to the US when I was 18 years old. I learned how to adapt to a constantly changing environment and
      culture that encouraged me to be more creative.</p>
          <p>I have always admired the tech scene because it enhances us to do better. Namely, one of my favorite aspects of
      the tech scene is learning new tools, libraries, and applications.</p>
          <p>My specialities include: HTML, CSS, JavaScript and React. In other words, It’s an endless process where I always
      learn and adapt.</p>
          <p>One of my dreams is to work for a company that helps the community and allows me to grow as a person and
      professional.</p>
          <p>I’m available to work in Austin, TX.</p>
          <div class="about-a">
            <a href="img/Saucedo-Joel-Resume.pdf" target="_blank" class="button">Download my CV </a>
          </div>
        </div>
        <div className="about-svg">
          <img className="about-svg" src={Texas} />
        </div>
        <a class="about-a" href="https://www.vecteezy.com/free-vector/austin">Austin Vectors by Vecteezy</a>
        <Footer />
      </div >
    )
  }
}

export default About;
