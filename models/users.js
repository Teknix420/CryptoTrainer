const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    email: String,
    username: String,
    hash: String
});

const Users = mongoose.model('User', usersSchema);

module.exports = Users;