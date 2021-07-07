import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './Navbar.css';

class Navbar extends Component {

  render() {
    return (
      <div className="Navbar">
          <nav class="navbar navbar-dark bg-dark">
            <span class="navbar-brand mb-0 h1"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fblog.spiralofhope.com%2Fwp-content%2Fuploads%2FBrave-logo-transparent-2.png&f=1&nofb=1" height="40px" width="40px" alt="logo"></img>  Coin Market Cap</span>
          </nav>
      </div>
    );
  }
}

export default Navbar;
