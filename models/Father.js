const mongoose = require('mongoose');

const fatherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
}, { versionKey: false, collection: 'Father' });

module.exports = mongoose.model('Father', fatherSchema);
