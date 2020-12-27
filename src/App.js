import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar/Navbar.jsx'
import FooterPage from './components/Footer/FooterPage.jsx'
import FullData from './components/FullData/FullData.jsx'


var NumberFormat = require('react-number-format');

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cryptos: []
    };
  }

  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT,USDT,XRP,LTC,BCH,ADA,BNB,USDC,EOS&tsyms=INR')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({cryptos: cryptos});
      })
  }

  render() {
    return (

      <div className="App">
        <Navbar />

              <FullData />

        <br></br>
        {Object.keys(this.state.cryptos).map((key) => (
          <div id="crypto-container">
            <span className="left">{key}</span>
            <span className="right"><NumberFormat value={this.state.cryptos[key].INR} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'₹ '} /></span>
          </div>

        ))}

      <FooterPage />

      </div>
      
    );
  }
}

export default App;