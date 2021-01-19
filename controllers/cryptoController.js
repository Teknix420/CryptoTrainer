const db = require('../models');
const axios = require('axios');

module.exports = {
    convertCrypto: function (req, res) {
        axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=' + req.body.convertFrom + '&convert=' + req.body.convertTo,
            {
                headers: {
                    'X-CMC_PRO_API_KEY': '63cc9d36-3094-4b57-b896-d28c356f54b4',
                    'Accept': 'application/json',
                },
            })
            .then((result) => {
                res.json(result.data);
            })
            .catch(err => console.log(err));
    },
    searchCrypto: function (req, res) {
        axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=' + req.body.symbol,
            {
                headers: {
                    'X-CMC_PRO_API_KEY': '63cc9d36-3094-4b57-b896-d28c356f54b4',
                    'Accept': 'application/json',
                },
            })
            .then((result) => {
                res.json(result.data.data);
            })
            .catch(err => console.log(err));
    },
    marketValue: function (req, res) {
        axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC,BCH,ETH,LTC,XRP,TRX,XMR,DOT,XLM',
            {
                headers: {
                    'X-CMC_PRO_API_KEY': '63cc9d36-3094-4b57-b896-d28c356f54b4',
                    'Accept': 'application/json',
                },
            })
            .then((result) => {
                res.json(result.data.data);
            })
            .catch(err => console.log(err));
    },
    createPortfolio: function (req, res) {
        db.Crypto
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    update: function (req, res) {
        let fromAmt = req.body.tradingFrom.amount;
        let toAmt = req.body.tradingTo.amount;
        let username = req.body.currentPortfolio.username;
        let fromCrypto = req.body.tradingFrom.crypto;
        let toCrypto = req.body.tradingTo.crypto;
        let portfolio = req.body.currentPortfolio;

        db.Crypto
            .findOneAndUpdate({ username: username }, {
                $set: {
                    [fromCrypto]: portfolio[fromCrypto] - fromAmt,
                    [toCrypto]: toAmt
                }
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))

    }
}