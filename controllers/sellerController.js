const Seller = require('../models/Seller')

const createSeller = async (req, res) => {
    try {
        const { name, gender, phone, email, password, confirmPassword, profilePicUrl, type, sellerID, bussinessType, storeLogoUrl } = req.body
        const seller = new Seller({
            name,
            gender,
            phone,
            email,
            password,
            confirmPassword,
            profilePicUrl,
            type,
            sellerID,
            bussinessType,
            storeLogoUrl
        })
        await seller.save()
        res.status(201).json(seller)
    } catch (error) {
        console.log("There is an error: ", error)
        res.status(500).json({ message: "Server Error" })
    }
}

const getSellers = async (req, res) => {
    try {
        const sellers = await Seller.find()
        res.status(200).json(sellers)
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "Server Error" })
    }
}

const singleSeller = async (req, res) => {
    try {
        const seller = await Seller.findById(req.params.id)
        if (!seller) {
            return res.status(404).json({ message: "Seller not found" })
        }
        res.status(200).json(seller)
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "Server Error" })
    }
}

const updateSeller = async (req, res) => {
    try {
        const { name, gender, phone, email, password, confirmPassword, profilePicUrl, type, sellerID, bussinessType, storeLogoUrl } = req.body
        const mySeller = await Seller.findByIdAndUpdate(
            req.params.id, { name, gender, phone, email, password, confirmPassword, profilePicUrl, type, sellerID, bussinessType, storeLogoUrl }
        )
        if (!mySeller) {
            return res.status(404).json({ message: "Seller Not Found" })
        }
        res.status(200).json(mySeller)
    } catch (error) {
        console.log("Error:", error)
        res.status(500).json({ message: "Server Error" })
    }
}

const deleteSeller = async (req, res) => {
    try {
        await Seller.findByIdAndDelete(req.params.id)
        res.status(204).send()
    } catch (error) {
        console.log("Error:", error)
        res.status(500).json({ message: "Server Error" })
    }
}

module.exports = { createSeller, getSellers, singleSeller, updateSeller, deleteSeller }

