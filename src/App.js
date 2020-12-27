import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar.jsx'
import Footer from './components/FooterPage.jsx'


var NumberFormat = require('react-number-format');

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cryptos: []
    };
  }

  componentDidMount() {
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,IOT,USDT,XRP,LTC,BCH,ADA,BNB,USDC,EOS&tsyms=USD')
      .then(res => {
        const cryptos = res.data;
        console.log(cryptos);
        this.setState({cryptos: cryptos});
      })

      axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,XRP,LTC,BCH,ADA,BNB,USDC,EOS&tsyms=USD')
      .then(res => {
        const cryptoss = res.data;
        console.log(cryptoss);
        this.setState({cryptoss: cryptoss});
      })
  }

  render() {
    return (

      <div className="App">
        <Navbar />


        <br></br>
        {Object.keys(this.state.cryptos).map((key) => (
          <div id="crypto-container">
            <span className="left">{key}</span>
            <span className="right"><NumberFormat value={this.state.cryptos[key].USD} displayType={'text'} decimalPrecision={2} thousandSeparator={true} prefix={'₹ '} /></span>
          </div>

        ))}


      <Footer />  
      </div>
    );
  }
}

export default App;