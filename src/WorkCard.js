import React, { Component } from 'react';
import Pokemon from './img/pokemon_1.png'
import './WorkCard.css'

class WorkCard extends Component {
  render() {
    return (
      <section className="home_work"><a id="work"></a>
        <h1>Work</h1>
        <div className="grid">
          <div className="grid__item">
            <div className="img-container">
              <img className="img" src={Pokemon} />
            </div>
            <div>
              <h2><a className="a-work" href="pokemon.html">Pokemon jQuery</a></h2>
              <span className="work-s">jQuery + Public API</span>
            </div>
            <div>
              <button>Code</button>
              <button>Aplication</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default WorkCard;