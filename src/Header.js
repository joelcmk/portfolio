import React, { Component } from "react";
import "./Header.css"
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
  state = {
    active: true,
  }

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
                <NavLink
                  exact
                  role="menuitem"
                  className="navigation-list__item"
                  activeClassName="navbar__link--active"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li role="presentation">
                <NavLink
                  to="/about"
                  role="menuitem"
                  className="navigation-list__item"
                  activeClassName="navbar_link--active"
                >
                  About Me
                   </NavLink>
              </li>
              <li role="presentation">
                <NavLink
                  to="/contact"
                  role="menuitem"
                  className="navigation-list__item"
                  activeClassName="navbar__link--active"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}

export default Header;