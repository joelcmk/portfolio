import React, { Component } from 'react';
import Pokemon from './img/pokemon_1.png'
import './WorkCard.css'

class WorkCard extends Component {
  state = {
    hover: false,
    card: 0
  }

  hoverOn = (value) => {
    this.setState({
      hover: true,
      card: value
    })
  }

  hoverOff = () => {
    this.setState({
      hover: false,
      card: '0'
    })
  }

  card = (value) => {
    this.setState({
      card: value
    })
  }

  card2 = () => {
    this.setState({
      card: '2'
    })
  }

  render() {
    const test = this.state.card;
    const card = '1'
    return (
      <section className="home_work">
        <div className="grid">
          <div
            className="grid__item test2"
            onMouseEnter={() => this.hoverOn('1')}
            onMouseLeave={this.hoverOff}
          >
            {this.state.hover && test === '1' ?
              <div className="test"
              >
                <p>Shows a list of Pokemon. View the height and name of each Pokemon.</p>
                <div>
                  <button>Code</button>
                  <button>Application</button>
                </div>
              </div>
              :
              <div >
                <h2>Pokemon jQuerty 1</h2>
                <img className="img" src={Pokemon} />
              </div>
            }
          </div>
          <div
            className="grid__item test2"
            onMouseEnter={() => this.hoverOn('2')}
            onMouseLeave={this.hoverOff}
          >
            {this.state.hover && test === "2" ?
              <div className="test"
                onMouseEnter={this.card2}
              >
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
        </div>
      </section>
    )
  }
}

export default WorkCard;