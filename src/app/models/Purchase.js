const mongoose = require('mongoose')

const PurchaseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    products: {
        type: String,
        required: true
    },
    value: String,
    cashBack: String,
    paymentMethod: Number
}, {
    timestamps: true
})

module.exports = mongoose.model('Purchase', PurchaseSchema)