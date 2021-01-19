import React from 'react';
import ConvertValue from '../../logic/convertValue';
import ExecuteTrade from '../../logic/executeTrade';

function Trade(props) {
    const USD = props.state.USD;
    const portfolio = props.state.portfolio;

    return (
        <div id="tradeDiv" className="modal" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Trade</h5>
                    </div>
                    <div className="modal-body">
                        <form>
                            Trading From:
                            <div className="mb-3">
                                <select className="form-select" id="convertFrom" aria-label="Floating label select example">
                                    <option value="0">Select a Cryptocurrency</option>
                                    <option value="BTC">Bitcoin - BTC - {portfolio.BTC}</option>
                                    <option value="BCH">Bitcoin Cash - BCH - {portfolio.BCH}</option>
                                    <option value="ETH">Ethereum - ETH - {portfolio.ETH}</option>
                                    <option value="XRP">Ripple - XRP - {portfolio.XRP}</option>
                                    <option value="LTC">Litecoin - LTC - {portfolio.LTC}</option>
                                    <option value="XLM">Stellar - XLM - {portfolio.XLM}</option>
                                    <option value="TRX">Tron - TRX {portfolio.TRX}</option>
                                    <option value="DOT">Polkadot - DOT - {portfolio.DOT}</option>
                                    <option value="XMR">Monero - XMR - {portfolio.XMR}</option>
                                    <option value="USD">US Dollars - USD - {USD.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <input type="number" className="form-control" id="amountTradingFrom" />
                                <label htmlFor="amountTradingFrom">Enter an Amount to Trade</label>
                            </div>
                            Trading To:
                            <div className="mb-3">
                                <select className="form-select" onChange={() => {
                                    if (document.getElementById('convertTo').value !== '0' && document.getElementById('convertFrom').value !== 0) {
                                        if (document.getElementById('convertFrom').value === document.getElementById('convertTo').value) {
                                            document.getElementById('sameCryptoError').style.display = 'block';
                                            document.getElementById('convertTo').value = '0';
                                            setTimeout(() => {
                                                document.getElementById('sameCryptoError').style.display = 'none';
                                            }, 1500)
                                        } else {
                                            const convert = {
                                                convertFrom: document.getElementById('convertFrom').value,
                                                convertTo: document.getElementById('convertTo').value
                                            }
                                            if (convert.convertFrom !== 0 && convert.convertTo !== 0) {
                                                ConvertValue(convert);
                                            };
                                        };
                                    }
                                }} id="convertTo" aria-label="Floating label select example">
                                    <option value="0">Select a Cryptocurrency</option>
                                    <option value="BTC">Bitcoin - BTC</option>
                                    <option value="BCH">Bitcoin Cash - BCH</option>
                                    <option value="ETH">Ethereum - ETH</option>
                                    <option value="XRP">Ripple - XRP</option>
                                    <option value="LTC">Litecoin - LTC</option>
                                    <option value="XLM">Stellar - XLM</option>
                                    <option value="TRX">Tron - TRX</option>
                                    <option value="DOT">Polkadot - DOT</option>
                                    <option value="XMR">Monero - XMR</option>
                                    <option value="USD">US Dollars - USD</option>
                                </select>
                            </div>
                        </form>
                        <div id="tradeValueDiv" style={{ display: 'none' }} cryptovalue="0" ></div>
                        <div className="modal-footer">
                            <div id="amountError" style={{ display: 'none' }} >Insufficient amount to trade</div>
                            <div id="successDiv" style={{ display: 'none' }}>Success!!</div>
                            <div id="sameCryptoError" style={{ display: 'none' }}>Please select different cryptocurrencies</div>
                            <button type="button" className="btn btn-info" onClick={() => {
                                const computedValue = document.getElementById('amountTradingFrom').value * document.getElementById('tradeValueDiv').cryptovalue.toFixed(8);
                                const tradeParams = {
                                    currentPortfolio: props.state.portfolio,
                                    tradingFrom: {
                                        crypto: document.getElementById('convertFrom').value,
                                        amount: document.getElementById('amountTradingFrom').value
                                    },
                                    tradingTo: {
                                        crypto: document.getElementById('convertTo').value,
                                        amount: computedValue
                                    }
                                }
                                ExecuteTrade(tradeParams);
                            }}>Trade</button>
                            <button type="button" className="btn btn-secondary" onClick={() => {
                                document.getElementById('convertTo').value = '0';
                                document.getElementById('convertFrom').value = '0';
                                document.getElementById('amountTradingFrom').value = '';
                                document.getElementById('tradeDiv').style.display = 'none';
                            }}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trade;