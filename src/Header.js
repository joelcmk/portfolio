import React, { Component } from "react";
import "./Header.css"
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="page-header">
          <Link className="page-header--logo" to="/">
            Joel Saucedo
          </Link>
          <nav className="main-navegation page-header__item">
            <ul role="menubar" className="navegation-list">
              <li role="presentation">
                <Link href="index.html" role="menuitem" className="navigation-list__item">Home</Link>
              </li>
              <li role="presentation">
                <Link to="/about" role="menuitem" className="navigation-list__itemå+">About Me</Link>
              </li>
              <li role="presentation">
                <a href="contact.html" role="menuitem" className="navigation-list__item">Contact</a>
              </li>
              <li role="presentation">
                <a href="work.html" role="menuitem" className="navigation-list__item">Work</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header;