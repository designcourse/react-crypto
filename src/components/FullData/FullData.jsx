import React, { Component } from 'react';
import axios from 'axios';
import { MDBContainer } from 'mdbreact';
import "./FullData.css"


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      BTC: [],
      ETH: [],
      USDT : [],
      XRP: [],
      LTC: [],
      BCH: [],
      ADA: [],
      BNB: [],
      USDC: [],
      EOS: []
    };
  }

  componentDidMount() {
      axios.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,IOT,USDT,XRP,LTC,BCH,ADA,BNB,USDC,EOS&tsyms=USD')
      .then(res => {
        const BTC = res.data.DISPLAY.BTC.USD;
        const ETH = res.data.DISPLAY.ETH.USD;
        const USDT = res.data.DISPLAY.USDT.USD;
        const XRP = res.data.DISPLAY.XRP.USD;
        const LTC = res.data.DISPLAY.LTC.USD;
        const BCH = res.data.DISPLAY.BCH.USD;
        const ADA = res.data.DISPLAY.ADA.USD;
        const BNB = res.data.DISPLAY.BNB.USD;
        const USDC = res.data.DISPLAY.USDC.USD;
        const EOS = res.data.DISPLAY.EOS.USD;

        console.log(res.data.DISPLAY)
        console.log("One Above")
        this.setState({BTC: BTC, ETH : ETH, USDT : USDT, XRP : XRP, LTC : LTC, BCH : BCH, ADA : ADA, BNB : BNB, USDC : USDC, EOS : EOS });
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

          <tr>
            <th scope="row">2</th>
            <td>Ethereum (ETH)</td>
            <td>{this.state.ETH.PRICE}</td>
            <td>{this.state.ETH.MKTCAP}</td>
            <td>{this.state.ETH.LOWDAY}</td>
            <td>{this.state.ETH.HIGHDAY}</td>
            <td>{this.state.ETH.CHANGEDAY}</td>
            <td>{this.state.ETH.CHANGEPCT24HOUR} %</td>
          </tr>

          <tr>
            <th scope="row">3</th>
            <td>Ethereum (USDT)</td>
            <td>{this.state.USDT.PRICE}</td>
            <td>{this.state.USDT.MKTCAP}</td>
            <td>{this.state.USDT.LOWDAY}</td>
            <td>{this.state.USDT.HIGHDAY}</td>
            <td>{this.state.USDT.CHANGEDAY}</td>
            <td>{this.state.USDT.CHANGEPCT24HOUR} %</td>
          </tr>

          <tr>
            <th scope="row">4</th>
            <td>Ethereum (XRP)</td>
            <td>{this.state.XRP.PRICE}</td>
            <td>{this.state.XRP.MKTCAP}</td>
            <td>{this.state.XRP.LOWDAY}</td>
            <td>{this.state.XRP.HIGHDAY}</td>
            <td>{this.state.XRP.CHANGEDAY}</td>
            <td>{this.state.XRP.CHANGEPCT24HOUR} %</td>
          </tr>
          
          <tr>
            <th scope="row">5</th>
            <td>Ethereum (LTC)</td>
            <td>{this.state.LTC.PRICE}</td>
            <td>{this.state.LTC.MKTCAP}</td>
            <td>{this.state.LTC.LOWDAY}</td>
            <td>{this.state.LTC.HIGHDAY}</td>
            <td>{this.state.LTC.CHANGEDAY}</td>
            <td>{this.state.LTC.CHANGEPCT24HOUR} %</td>
          </tr>

          <tr>
            <th scope="row">6</th>
            <td>Ethereum (EOS)</td>
            <td>{this.state.EOS.PRICE}</td>
            <td>{this.state.EOS.MKTCAP}</td>
            <td>{this.state.EOS.LOWDAY}</td>
            <td>{this.state.EOS.HIGHDAY}</td>
            <td>{this.state.EOS.CHANGEDAY}</td>
            <td>{this.state.EOS.CHANGEPCT24HOUR} %</td>
          </tr>

          <tr>
            <th scope="row">7</th>
            <td>Ethereum (BCH)</td>
            <td>{this.state.BCH.PRICE}</td>
            <td>{this.state.BCH.MKTCAP}</td>
            <td>{this.state.BCH.LOWDAY}</td>
            <td>{this.state.BCH.HIGHDAY}</td>
            <td>{this.state.BCH.CHANGEDAY}</td>
            <td>{this.state.BCH.CHANGEPCT24HOUR} %</td>
          </tr>

          <tr>
            <th scope="row">8</th>
            <td>Ethereum (ADA)</td>
            <td>{this.state.ADA.PRICE}</td>
            <td>{this.state.ADA.MKTCAP}</td>
            <td>{this.state.ADA.LOWDAY}</td>
            <td>{this.state.ADA.HIGHDAY}</td>
            <td>{this.state.ADA.CHANGEDAY}</td>
            <td>{this.state.ADA.CHANGEPCT24HOUR} %</td>
          </tr>

          <tr>
            <th scope="row">9</th>
            <td>Ethereum (BNB)</td>
            <td>{this.state.BNB.PRICE}</td>
            <td>{this.state.BNB.MKTCAP}</td>
            <td>{this.state.BNB.LOWDAY}</td>
            <td>{this.state.BNB.HIGHDAY}</td>
            <td>{this.state.BNB.CHANGEDAY}</td>
            <td>{this.state.BNB.CHANGEPCT24HOUR} %</td>
          </tr>

          <tr>
            <th scope="row">10</th>
            <td>Ethereum (USDC)</td>
            <td>{this.state.USDC.PRICE}</td>
            <td>{this.state.USDC.MKTCAP}</td>
            <td>{this.state.USDC.LOWDAY}</td>
            <td>{this.state.USDC.HIGHDAY}</td>
            <td>{this.state.USDC.CHANGEDAY}</td>
            <td>{this.state.USDC.CHANGEPCT24HOUR} %</td>
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