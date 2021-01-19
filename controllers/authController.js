const db = require('../models');

module.exports = {
    validateUser: function (req, res) {

        if (!req.session.currentUser) {
            db.Crypto
                .findOne({ username: req.query.username })
                .then(dbModel => {
                    req.session.currentUser = dbModel.username;
                    res.json(dbModel);
                })
                .catch(err => {
                    res.status(422).json(err)
                })
        } else {
            db.Crypto
                .findOne({ username: req.session.currentUser })
                .then(dbModel => {
                    res.json(dbModel);
                })
                .catch(err => {
                    res.status(422).json(err)
                })
        }
    },
    removeUser: function (req, res) {
        req.session.destroy(err => {
            if (err) {
                res.json('Error Logging Out');
            } else {
                res.json('Logout Successful')
            }
        })
    }
};