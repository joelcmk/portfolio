import React, { Component } from 'react';
import './Work.css'

class Work extends Component {
  render() {
    return (
      <section className="home_work"><a id="work"></a>
        <h1>Work</h1>
        <div className="grid">
          <div className="grid__item">
            <h2><a className="a-work" href="pokemon.html">Pokemon jQuery</a></h2>
            <span className="work-s">jQuery + Public API</span>
            <p>
              Shows a list of Pokemon. View the height and name of each Pokemon.
          </p>
            <a target="_blank" href="https://github.com/joelcmk/Pokemon-jQuery">See project on Github</a>
            <a id="work_app" target="_blank" href="https://joelcmk.github.io/Pokemon-jQuery/">Go to app</a>
          </div>
          <div className="grid__item">
            <h2><a className="a-work" href="myflix.html">myFlix App</a></h2>
            <span className="work-s">Node.js + Mongodb + React</span>
            <p>
              A film database. Register, login, add movies to favorites.
            </p>
            <a target="_blank" href="https://github.com/joelcmk/movie_api">See project on Github</a>
            <a id="work_app" target="_blank" href="https://my-flix-app0.herokuapp.com/client/">Go to app</a>
          </div>
          <div className="grid__item">
            <h2><a className="a-work" href="to-do-list.html">To-do List</a></h2>
            <span className="work-s">Vue.js + Vue material</span>
            <p>
              Add, edit, complete or remove items form a to-do list.
             </p>
            <a target="_blank" href="https://github.com/joelcmk/to-do-list">See project on Github</a>
            <a id="work_app" target="_blank" href="https://joelcmk.github.io/to-do-list/">Go to app</a>
          </div>
          <div className="grid__item">
            <h2><a className="a-work" href="meetup.html">Meetup app</a></h2>
            <span className="work-s">React + AWS Lambda + Meetup API</span>
            <p>
              Find events on you city and anywhere around the globe.
            </p>
            <a target="_blank" href="https://github.com/joelcmk/meetup">See project on Github</a>
            <a id="work_app" target="_blank" href="https://joelcmk.github.io/meetup">Go to app</a>
          </div>
          <div className="grid__item">
            <h2><a className="a-work" href="chat-react-native.html">ChatApp</a></h2>
            <span className="work-s">React Native + Firebase + Gifted Chat + Expo</span>
            <p>
              App made with React Native. Chat with your friends, send text messages, images and your location.
             </p>
            <a target="_blank" href="https://github.com/joelcmk/chat-app">See project on Github</a>
          </div>
        </div>
      </section>
    )
  }
}

export default Work;