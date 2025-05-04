const SellerItem = require('../models/SellerItem')

const createSellerItem = async (req, res) => {
    try {
        const { sellerId, itemID, itemName, itemPrice, itemImgUrl } = req.body
        const sellerItem = new SellerItem({
            sellerId,
            itemID,
            itemName,
            itemPrice,
            itemImgUrl
        })
        await sellerItem.save()
        res.status(201).json(sellerItem)

    } catch (error) {
        console.log("There is an error: ", error)
        res.status(500).json({ message: "Server Error" })
    }
}

const getSellerItems = async (req, res) => {
    try {
        const sellerItems = await SellerItem.find()
        res.status(200).json(sellerItems)
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "Server Error" })
    }
}

const singleSellerItem = async (req, res) => {
    try {
        const sellerItem = await SellerItem.findById(req.params.id)
        if (!sellerItem) {
            return res.status(404).json({ message: "Seller Item not Found" })
        }
        res.status(200).json(sellerItem)
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "Server Error" })
    }
}

const updateSellerItem = async (req, res) => {
    try {
        const { sellerId, itemID, itemName, itemPrice, itemImgUrl } = req.body
        const mySellerItem = await SellerItem.findByIdAndUpdate(
            req.params.id, { sellerId, itemID, itemName, itemPrice, itemImgUrl }
        )

        if (!mySellerItem) {
            return res.status(404).json({ message: "Seller Item Not Found" })
        }
        res.status(200).json(mySellerItem)
    } catch (error) {
        console.log("Error:", error)
        res.status(500).json({ message: "Server Error" })
    }
}

const deleteSellerItem = async (req, res) => {
    try {
        await SellerItem.findByIdAndDelete(req.params.id)
        res.status(204).send()
    } catch (error) {
        console.log("Error:", error)
        res.status(500).json({ message: "Server Error" })
    }
}

module.exports = { createSellerItem, getSellerItems, singleSellerItem, updateSellerItem, deleteSellerItem }