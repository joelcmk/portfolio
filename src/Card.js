import React, { Component } from 'react';
import Contact from './Pages/Contact';

class Card extends Component {

  render() {
    return (
      <div className="">
        <p>{this.props.card.name}</p>
      </div>
    )
  }
}

export default Card;