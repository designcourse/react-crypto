import React, { Component } from 'react';
import axios from 'axios';


var NumberFormat = require('react-number-format');

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      full: []
    };
  }

  componentDidMount() {
      axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=INR')
      .then(res => {
        const full = res.data.DISPLAY.BTC.INR;
        console.log(res.data.DISPLAY.BTC);
        this.setState({full: full});
      })
  }

  render() {
    return (

      <div className="App">

        <br></br>
        {Object.keys(this.state.full).map((key) => (
          <div id="crypto-container">
            <span className="left">{key}</span>
            <span className="right">{this.state.full[key]}</span>
          </div>

        ))}



      </div>
      
    );
  }
}

export default App;