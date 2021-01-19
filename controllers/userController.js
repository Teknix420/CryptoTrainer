const db = require('../models');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    create: function (req, res) {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(req.body.password, salt, function (err, hash) {
                db.Users
                    .create({
                        email: req.body.email,
                        username: req.body.username,
                        hash: hash
                    })
                    .then(dbModel => {
                        res.json(dbModel);
                    })
                    .catch(err => res.status(422).json(err));
            })
        })
    },
    userLogin: function (req, res) {
        db.Users
            .findOne({ username: req.query.username })
            .then(dbModel => {
                if (dbModel !== null) {

                    bcrypt.compare(req.query.password, dbModel.hash, function (err, result) {
                        if (result === true) {
                            res.json(dbModel);
                        } else {
                            res.json('Invalid Password');
                        }
                    });
                } else {
                    res.json(dbModel)
                }
            })
            .catch(err => res.status(422).json(err));
    },
    userEmailVerification: function (req, res) {
        db.Users
            .findOne({ email: req.query.email })
            .then(dbModel => {
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    },
    usernameVerification: function (req, res) {
        db.Users
            .findOne({ username: req.query.username })
            .then(dbModel => {
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    }
};