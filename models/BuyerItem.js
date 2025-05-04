const mongoose = require("mongoose")

const buyerItemSchema = new mongoose.Schema({
    itemIDs: {
        type: [Number],
        required: true
    },
    itemNames: {
        type: [String],
        required: true
    },
    itemPrices: {
        type: [Number],
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    totalItems: {
        type: Number,
        required: true
    },
    buyerID: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('BuyerItem', buyerItemSchema)