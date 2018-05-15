import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";

class Navbar extends Component {
  render() {
      return (
        <header className="app-header">
          <div className="header-logo">
            <Link to="/">
              <div style={{height: "50px", width: "50px", borderRadius: "50%", backgroundColor: "blue"}} />
            </Link>
          </div>
          <div className="header-content">
            <header>
              <Link to="/">Jessica Doll</Link>
            </header>
            <nav>
              <li>
                <NavLink to="/originals">Original Artwork</NavLink>
              </li>
              <li>
                <NavLink to="/commissions">Commissions</NavLink>
              </li>
              <li>
                <NavLink to="/pets">Pet Caricatures</NavLink>
              </li>
              <li>
                <NavLink to="/storyboards">Storyboards</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </nav>
          </div>
        </header>
      );
  }
}

export default Navbar;