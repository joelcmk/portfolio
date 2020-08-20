import React, { Component } from 'react';
import './WorkCards.css';

class Card extends Component {
  state = {
    hover: false,
    card: 0,
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

  render() {
    const card = this.props.card;
    const img = this.props.card.image
    return (
      <div
        className="grid__item test2"
        onMouseEnter={() => this.hoverOn('1')}
        onMouseLeave={this.hoverOff}
      >
        {this.state.hover && this.state.card === '1' ?
          <div className="home-card"
          >
            <p>{card.description}</p>
          </div>
          :
          <div className="home-card">
            <h2>{card.name}</h2>
            <img className="img" src={img} />

          </div>
        }
        <div className="home">
          <a href={card.code} target="_blank" className="button">Code</a>
          <a href={card.aplication} target="_blank" className="button btn-home">Aplication</a>
        </div>
      </div>
    )
  }
}

export default Card;