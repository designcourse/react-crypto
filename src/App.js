import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar.jsx'
import FooterPage from './components/Footer/FooterPage.jsx'
import FullData from './components/FullData/FullData.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <FullData />
        <FooterPage />
      </div>
    );
  }
}
export default App;