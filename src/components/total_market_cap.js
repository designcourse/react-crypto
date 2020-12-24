import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
var NumberFormat = require('react-number-format');

class total_market_cap extends Component {

  constructor(props) {
    super(props);

    this.state = {
      cryptos: []
    };
  }

  componentDidMount() {
    axios.get('https://api.coingecko.com/api/v3/global')
      .then(res => {
        //const cryptos = res.data;
        const cryptos = res.data.data.market_cap_percentage;
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
            <span className="right"><NumberFormat value={this.state.cryptos[key]} displayType={'text'} decimalPrecision={2} thousandSeparator={true} suffix={'%'} /></span>
          </div>
        ))}
      </div>
    );
  }
}

export default total_market_cap;
