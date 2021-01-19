import axios from 'axios';

export default {
    createUser: function (data) {
        return axios.post('/api/users', data);
    },
    validateUser: function (data) {
        return axios.get('/api/users', data);
    },
    checkEmail: function (data) {
        return axios.get('/api/users/email', data);
    },
    checkUsername: function (data) {
        return axios.get('/api/users/username', data);
    },
    getMarketValue: function () {
        return axios.get('/api/crypto/market');
    },
    convertValue: function (convert) {
        return axios.post('/api/crypto/convert', convert);
    },
    createPortfolio: function (data) {
        return axios.post('/api/crypto', data);
    },
    trade: function (data) {
        return axios.post('/api/crypto/update', data);
    },
    searchCrypto: function (data) {
        return axios.post('/api/crypto/search', data)
    },
    userLogin: function (data) {
        axios.interceptors.response.use(
            res => res,
            err => {
                if (err.response.status === 422) {
                    window.location.href = '/';
                    window.alert("You're not logged in!");
                }
            }
        );
        return axios.get('/auth/login', data);
    },
    logoutUser: function () {
        return axios.get('/auth/logout');
    }
}