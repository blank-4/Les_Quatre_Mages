const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    author: ObjectId,
    username: String,
    email: String,
    password: String,
})

module.exports = mongoose.model('User', UserSchema);