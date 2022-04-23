const mongoose = require('mongoose');

var User = mongoose.model('User', {
    name: { type: String },
    email: { type: String },
    password: { type: String },
},'Users');




module.exports = { User: User };
