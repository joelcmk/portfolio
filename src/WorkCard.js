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
    return (
      <section className="home_work">
        <div className="grid">
          <div
            className="grid__item test2"
            onMouseEnter={() => this.hoverOn('1')}
            onMouseLeave={this.hoverOff}
          >
            {this.state.hover && test === '1' ?
              <div className="home-card"
              >
                <p>Front-end web app created using jQuery, Bootstrap, and Pokemon REST API. It shows a list of Pokemons. when the user clicks on one, a modal with information of the Pokemon comes up. It includes the name, height, and a picture of the Pokemon.</p>
              </div>
              :
              <div className="home-card">
                <h2>Pokemon jQuerty</h2>
                <img className="img" src={Pokemon} />

              </div>
            }
            <div className="home">
              <button>Code</button>
              <button className="btn-home">Application</button>
            </div>
          </div>
          <div
            className="grid__item test2"
            onMouseEnter={() => this.hoverOn('2')}
            onMouseLeave={this.hoverOff}
          >
            {this.state.hover && test === "2" ?
              <div className="home-card"
                onMouseEnter={this.card2}
              >
                <p>Shows a list of Pokemon. View the height and name of each Pokemon.</p>
              </div>
              :
              <div className="home-card" >
                <h2>Pokemon jQuerty</h2>
                <img className="img" src={Pokemon} />
              </div>
            }
            <div className="home">
              <button>Code</button>
              <button className="btn-home">Application</button>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default WorkCard;