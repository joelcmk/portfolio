import React, { Component } from 'react';
import Pokemon from './img/pokemon_1.png'
import './WorkCard.css'

class WorkCard extends Component {
  state = {
    hover: false,
  }

  hoverOn = () => {
    this.setState({
      hover: true
    })
  }

  hoverOff = () => {
    this.setState({
      hover: false
    })
  }

  render() {
    return (
      <div
        className="grid__item test2"
        onMouseEnter={this.hoverOn}
        onMouseLeave={this.hoverOff}
      >
        {this.state.hover ?
          <div className="test">
            <p>Shows a list of Pokemon. View the height and name of each Pokemon.</p>
            <div>
              <button>Code</button>
              <button>Application</button>
            </div>
          </div>
          :
          <div >
            <h2>Pokemon jQuerty</h2>
            <img className="img" src={Pokemon} />
          </div>
        }
      </div>
    )
  }
}

export default WorkCard;