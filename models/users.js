const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
    email: String,
    username: String,
    hash: String
});

const Users = mongoose.model('users', usersSchema);

module.exports = Users;