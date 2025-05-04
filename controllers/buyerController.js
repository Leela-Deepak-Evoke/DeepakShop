const Buyer = require('../models/Buyer')

const createBuyer = async (req, res) => {
    try {
        const { name, gender, phone, email, password, confirmPassword, profilePicUrl, type, homeAddress, paymentOptions } = req.body
        const buyer = new Buyer({
            name,
            gender,
            phone,
            email,
            password,
            confirmPassword,
            profilePicUrl,
            type,
            homeAddress,
            paymentOptions
        })
        await buyer.save()
        res.status(201).json(buyer)
    } catch (error) {
        console.log("There is an error: ", error)
        res.status(500).json({ message: "Server Error" })
    }
}

const getBuyers = async (req, res) => {
    try {
        const buyers = await Buyer.find()
        res.status(200).json(buyers)
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "Server Error" })
    }
}

const singleBuyer = async (req, res) => {
    try {
        const buyer = await Buyer.findById(req.params.id)
        if (!buyer) {
            return res.status(404).json({ message: "Buyer not found" })
        }
        res.status(200).json(buyer)
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "Server Error" })
    }
}

const updateBuyer = async (req, res) => {
    try {
        const { name, gender, phone, email, password, confirmPassword, profilePicUrl, type, homeAddress, paymentOptions } = req.body
        const myBuyer = await Buyer.findByIdAndUpdate(
            req.params.id, { name, gender, phone, email, password, confirmPassword, profilePicUrl, type, homeAddress, paymentOptions }
        )
        if (!myBuyer) {
            return res.status(404).json({ message: "Buyer Not Found" })
        }
        res.status(200).json(myBuyer)
    } catch (error) {
        console.log("Error:", error)
        res.status(500).json({ message: "Server Error" })
    }
}

const deleteBuyer = async (req, res) => {
    try {
        await Buyer.findByIdAndDelete(req.params.id)
        res.status(204).send()
    } catch (error) {
        console.log("Error:", error)
        res.status(500).json({ message: "Server Error" })
    }
}

module.exports = { createBuyer, getBuyers, singleBuyer, updateBuyer, deleteBuyer }