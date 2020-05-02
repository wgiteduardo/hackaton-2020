const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    barCode: {
        type: String,
        required: true
    },
    description: String,
    images: Array
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', ProductSchema)