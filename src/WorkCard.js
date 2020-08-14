import React, { Component } from 'react';

class WorkCard extends Component {
  render() {
    return (
      <section className="home_work"><a id="work"></a>
        <h1>Work</h1>
        <div className="grid">
          <div className="grid__item">
            <h2><a className="a-work" href="pokemon.html">Pokemon jQuery</a></h2>
            <span className="work-s">jQuery + Public API</span>

            <button>Code</button>
            <button>Aplication</button>
          </div>
        </div>
      </section>
    )
  }
}

export default WorkCard;