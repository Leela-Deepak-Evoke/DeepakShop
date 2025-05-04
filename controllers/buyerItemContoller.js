const BuyerItem = require('../models/BuyerItem')

const createBuyerItem = async (req, res) => {
    try {
        const { itemIDs, itemNames, itemPrices, totalPrice, totalItems, buyerID } = req.body
        const buyerItem = new BuyerItem({
            itemIDs,
            itemNames,
            itemPrices,
            totalPrice,
            totalItems,
            buyerID
        })
        await buyerItem.save()
        res.status(201).json(buyerItem)
    } catch (error) {
        console.log("There is an error: ", error)
        res.status(500).json({ message: "Server Error" })
    }
}

const getBuyerItems = async (req, res) => {
    try {
        const buyerItems = await BuyerItem.find()
        res.status(200).json(buyerItems)
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "Server Error" })
    }
}

const singleBuyerItem = async (req, res) => {
    try {
        const buyerItem = await BuyerItem.findById(req.params.id)
        if (!buyerItem) {
            return res.status(404).json({ message: "Buyer Item not Found" })
        }
        res.status(200).json(buyerItem)
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "Server Error" })
    }
}

const updateBuyerItem = async (req, res) => {
    try {
        const { itemIDs, itemNames, itemPrices, totalPrice, totalItems, buyerID } = req.body
        const myBuyerItem = await BuyerItem.findByIdAndUpdate(
            req.params.id,
            { itemIDs, itemNames, itemPrices, totalPrice, totalItems, buyerID })
        if (!myBuyerItem) {
            return res.status(404).json({ message: "Buyer Item Not Found" })
        }
        res.status(200).json(myBuyerItem)
    } catch (error) {
        console.log("Error:", error)
        res.status(500).json({ message: "Server Error" })
    }
}

const deleteBuyerItem = async (req, res) => {
    try {
        await BuyerItem.findByIdAndDelete(req.params.id)
        res.status(204).send()
    } catch (error) {
        console.log("Error:", error)
        res.status(500).json({ message: "Server Error" })
    }
}

module.exports = { createBuyerItem, getBuyerItems, singleBuyerItem, updateBuyerItem, deleteBuyerItem }