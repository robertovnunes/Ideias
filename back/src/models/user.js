const mongoose = require('mongoose');

const user = mongoose.model('user', {
    name: String,
    email: String,
    username: String,
    roles: [String],
    password: String
})

module.exports = user;