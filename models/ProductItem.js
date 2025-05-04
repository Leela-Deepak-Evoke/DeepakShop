const mongoose = require("mongoose")

const ProductItemSchema = new mongoose.Schema({
    itemID: {
        type: Number,
        required: true
    },
    sellerId: {
        type: Number,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    },
    itemImgUrl: {
        type: String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ProductItem', ProductItemSchema)