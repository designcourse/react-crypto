import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
var NumberFormat = require('react-number-format');

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cryptos: []
    };
  }

  //  Cryptocurrencies
  //  BTC,ETH,IOT,USDT,XRP,LTC,BCH,ADA,BNB,USDC,EOS

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

        {Object.keys(this.state.cryptos).map((key) => (
          <div id="crypto-container">
            <span className="left">{key}</span>
            <span className="right"><NumberFormat value={this.state.cryptos[key].INR} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'₹'} /></span>
          </div>

        ))}
      </div>
    );
  }
}

export default App;
