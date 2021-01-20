import React, { Component } from 'react';
import { AccountHeader } from '../components/Header';
import Nav from '../components/Nav';
import Trade from '../components/Trade';
import Logout from '../logic/logout';
import API from '../utils/API.js';

class Dashboard extends Component {

    state = {
        portfolio: [],
        marketValue: [],
        BTC: 0,
        BCH: 0,
        ETH: 0,
        LTC: 0,
        XRP: 0,
        TRX: 0,
        XMR: 0,
        DOT: 0,
        XLM: 0,
        USD: 0,
        totalValue: 0
    };

    componentDidMount() {
        this.getPortfolio()
    };

    async getPortfolio() {
        API.userLogin()
            .then(res => {
                this.setState({ portfolio: res.data, USD: res.data.USD });
            })
            .then(res => {
                this.getMarketValue();
            })
            .catch(err => console.log(err));
    };

    async getMarketValue() {
        API.getMarketValue()
            .then(res => {
                this.setState({
                    marketValue: res.data,
                });
                for (const crypto in res.data) {
                    this.setState({ [crypto]: res.data[crypto].quote.USD.price })
                }
            })
            .then(res => {
                this.computeTotalValue();
            })
            .catch(err => console.log(err));
    };

    async computeTotalValue() {
        this.setState({ totalValue: this.state.portfolio.USD });
        const crypto = ['BTC', 'BCH', 'ETH', 'LTC', 'XRP', 'TRX', 'XMR', 'DOT', 'XLM']
        for (let i = 0; i < crypto.length; i++) {
            this.setState({ totalValue: this.state.totalValue + this.state.portfolio[crypto[i]] * this.state[crypto[i]] })
        }
        this.setState({ totalValue: this.state.totalValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) });
    }

    render() {

        return (
            <div className="dashboardDiv">
                <Trade state={this.state} />
                <Nav>
                    {/* eslint-disable-next-line */}
                    <a className="nav-link text-white" href="/#/dashboard" onClick={() => {
                        document.getElementById('tradeDiv').style.display = 'block';
                    }}>Trade</a>
                    {/* eslint-disable-next-line */}
                    <a className="nav-link text-white" href="/#/dashboard" onClick={() => {
                        Logout();
                    }}>Logout</a>
                </Nav>
                <AccountHeader email={this.state.portfolio.username} balance={this.state.totalValue} />
                <div className="card">
                    <div className="portfolioDiv card-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item list-group-item-secondary h4">Bitcoin: {this.state.portfolio.BTC} at ${this.state.BTC.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} per unit</li>
                            <li className="list-group-item list-group-item-dark h4">Bitcoin Cash: {this.state.portfolio.BCH} at ${this.state.BCH.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} per unit</li>
                            <li className="list-group-item list-group-item-secondary h4">Litecoin: {this.state.portfolio.LTC} at ${this.state.LTC.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} per unit</li>
                            <li className="list-group-item list-group-item-dark h4">Ethereum: {this.state.portfolio.ETH} at ${this.state.ETH.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} per unit</li>
                            <li className="list-group-item list-group-item-secondary h4">Ripple: {this.state.portfolio.XRP} at ${this.state.XRP.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} per unit</li>
                            <li className="list-group-item list-group-item-dark h4">Tron: {this.state.portfolio.TRX} at ${this.state.TRX.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} per unit</li>
                            <li className="list-group-item list-group-item-secondary h4">Stellar: {this.state.portfolio.XLM} at ${this.state.XLM.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} per unit</li>
                            <li className="list-group-item list-group-item-dark h4">Monero: {this.state.portfolio.XMR} at ${this.state.XMR.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} per unit</li>
                            <li className="list-group-item list-group-item-secondary h4">Polkadot: {this.state.portfolio.DOT} at ${this.state.DOT.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} per unit</li>
                            <li className="list-group-item list-group-item-dark h4">US Dollars: ${this.state.USD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</li>
                        </ul>
                    </div>
                </div>
                <button type="button" className="tradeBtn btn btn-success" onClick={() => {
                    document.getElementById('tradeDiv').style.display = 'block';
                }}>Trade</button>
            </div>
        )
    }
};

export default Dashboard;