import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer } from 'mdbreact';
import "./FullData.css"


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      BTC: []
    };
  }

  componentDidMount() {
      axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH&tsyms=USD')
      .then(res => {
        const BTC = res.data.DISPLAY.BTC.USD;
        console.log(res.data.DISPLAY);
        this.setState({BTC: BTC});
      })
  }

  render() {
    return (

      <div className="App">

    <MDBContainer>
      <br></br>
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Coin</th>
            <th scope="col">Price</th>
            <th scope="col">Market Cap</th>
            <th scope="col">High Day</th>
            <th scope="col">Low Day</th>
            <th scope="col">Change Day</th>
            <th scope="col">24h</th>


          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Bitcoin (BTC)</td>
            <td>{this.state.BTC.PRICE}</td>
            <td>{this.state.BTC.MKTCAP}</td>
            <td>{this.state.BTC.LOWDAY}</td>
            <td>{this.state.BTC.HIGHDAY}</td>
            <td>{this.state.BTC.CHANGEDAY}</td>
            <td>{this.state.BTC.CHANGEPCT24HOUR} %</td>
          </tr>
        </tbody>
      </table>

    </MDBContainer>

        <br></br>
        {Object.keys(this.state.BTC).map((key) => (
          <div id="crypto-container">
            <span className="left">{key}</span>
            <span className="right">{this.state.BTC[key]}</span>
          </div>

        ))}



      </div>
      
    );
  }
}

export default App;