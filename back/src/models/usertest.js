const mongoose = require('mongoose');

const usertest = mongoose.model('usertest', {
    name: String,
    email: String,
    username: String,
    roles: [String],
    password: String
})

module.exports = usertest;