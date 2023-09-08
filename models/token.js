const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    tokenCode: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['used', 'unused'],
    },
}, {
    timestamps: true, 
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;

