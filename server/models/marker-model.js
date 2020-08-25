const mongoose = require('mongoose')

const markerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    lat: Number,
    lng: Number,
    userId: String

});

module.exports = mongoose.model('Marker', markerSchema, 'markers')