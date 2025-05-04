const mongoose = require("mongoose")

const sellerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required : true
    },
    confirmPassword:{
        type: String,
        required: true
    },
    profilePicUrl:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    sellerID:{
        type: Number,
        required: true
    },
    bussinessType:{
        type: String,
        required: true
    },
    storeLogoUrl:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Seller',sellerSchema)