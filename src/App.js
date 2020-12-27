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

  componentDidMount() {
<<<<<<< HEAD
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=INR')
=======
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT&tsyms=USD')
>>>>>>> parent of 0b9bee0... Added other cryptos
      .then(res => {
        //const cryptos = res.data;
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({cryptos: cryptos});
      })
  }

  render() {
    return (
      <div className="App">
        <h2 class="heading">Cryptocurrency </h2>
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
