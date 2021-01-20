const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cryptoSchema = new Schema({
    username: String,
    BTC: {
        type: Number,
        default: 0
    },
    ETH: {
        type: Number,
        default: 0
    },
    XRP: {
        type: Number,
        default: 0
    },
    LTC: {
        type: Number,
        default: 0
    },
    BCH: {
        type: Number,
        default: 0
    },
    XLM: {
        type: Number,
        default: 0
    },
    TRX: {
        type: Number,
        default: 0
    },
    DOT: {
        type: Number,
        default: 0
    },
    XMR: {
        type: Number,
        default: 0
    },
    USD: {
        type: Number,
        default: 10000
    }
});

const CryptoCurrency = mongoose.model('Cryptocurrency', cryptoSchema);

module.exports = CryptoCurrency;