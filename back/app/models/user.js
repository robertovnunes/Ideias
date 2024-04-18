const mongoose = require('mongoose');

const user = new mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    roles: [String],
    token: String,
});

module.exports = mongoose.model('user', user);