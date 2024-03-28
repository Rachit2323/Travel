const mongoose = require('mongoose');

const DetailedSchema = new mongoose.Schema({
    licensePlate: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    VIN: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    milesDriven: {
        type: [Number], 
        required: true
    }
});

const Details = mongoose.model('Detail', DetailedSchema);

module.exports = Details;
