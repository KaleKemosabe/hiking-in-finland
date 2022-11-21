import React, { Component } from "react";
// TODO change logo to lottie animation
// import animationData from '../images/lottie/forest.json';
import { FaAlignJustify, FaMountain } from "react-icons/fa";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/" className="logo-link">
              <FaMountain className="logo" />
              <p className="logo logo-text">Hike Finland</p>
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignJustify className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/mappage">Map</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/hikes">Stories</Link>
            </li>
            <li>
              <Link to="/#contact-section">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
