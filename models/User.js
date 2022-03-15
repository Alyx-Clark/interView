const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    industry: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = User = mongoose.model('User', UserSchema);
