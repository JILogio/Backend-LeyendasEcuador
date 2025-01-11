const mongoose = require('mongoose');

const cantuniaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true
    },
}, { versionKey: false, collection: 'Cantunia' });

module.exports = mongoose.model('Cantunia', cantuniaSchema);
