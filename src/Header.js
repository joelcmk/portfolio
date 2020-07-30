import React, { Component } from "react";
import "./Header.css"

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header class="page-header">
          <a class="page-header--logo" href="index.html">
            Joel Saucedo
    </a>
          <nav class="main-navegation page-header__item">
            <ul role="menubar" class="navegation-list">
              <li role="presentation">
                <a href="index.html" role="menuitem" class="navigation-list__item">Home</a>
              </li>
              <li role="presentation">
                <a href="about.html" role="menuitem" class="navigation-list__item">About Me</a>
              </li>
              <li role="presentation">
                <a href="contact.html" role="menuitem" class="navigation-list__item">Contact</a>
              </li>
              <li role="presentation">
                <a href="work.html" role="menuitem" class="navigation-list__item">Work</a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header;