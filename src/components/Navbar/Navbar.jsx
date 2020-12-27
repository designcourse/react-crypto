import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Navbar.css';

class Navbar extends Component {

  render() {
    return (
      <div className="Navbar">
          <nav class="navbar navbar-dark bg-dark">
            <span class="navbar-brand mb-0 h1">Coin Market Cap</span>
          </nav>
      </div>
    );
  }
}

export default Navbar;
