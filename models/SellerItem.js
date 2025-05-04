const mongoose = require("mongoose")

const sellerItemSchema = new mongoose.Schema({
    sellerId: {
        type: Number,
        required: true
    },
    itemID: {
        type: Number,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    },
    itemImgUrl: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('SellerItem', sellerItemSchema)