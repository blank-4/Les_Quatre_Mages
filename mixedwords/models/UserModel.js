var mongoose = require('mongoose')

var UserSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
})

module.exports = mongoose.model('User', UserSchema);