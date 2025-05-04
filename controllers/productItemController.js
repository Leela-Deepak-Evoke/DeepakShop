const ProductItem = require('../models/ProductItem')

const createProductItem = async (req, res) => {
    try {
        const { itemID, sellerId, itemPrice, itemImgUrl, itemName } = req.body
        const productItem = new ProductItem({
            itemID,
            sellerId,
            itemPrice,
            itemImgUrl,
            itemName
        })
        await productItem.save()
        res.status(201).json(productItem)
    } catch (error) {
        console.log("There is an error: ", error)
        res.status(500).json({ message: "Server Error" })
    }
}

const getProductItems = async (req, res) => {
    try {
        const productItem = await ProductItem.find()
        res.status(200).json(productItem)
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "Server Error" })
    }
}

const singleProductItem = async (req, res) => {
    try {
        const productItem = await ProductItem.findById(req.params.id)
        if (!productItem) {
            return res.status(404).json({ message: "Product Item not Found" })
        }
        res.status(200).json(productItem)
    } catch (error) {
        console.log("Error: ", error)
        res.status(500).json({ message: "Server Error" })
    }
}

const updateProductItem = async (req, res) => {
    try {
        const { itemID, sellerId, itemPrice, itemImgUrl, itemName } = req.body
        const myProductItem = await ProductItem.findByIdAndUpdate(
            req.params.id,
            { itemID, sellerId, itemPrice, itemImgUrl, itemName }
        )
        if (!myProductItem) {
            return res.status(404).json({ message: "Product Item Not Found" })
        }
        res.status(200).json(myProductItem)
    } catch (error) {
        console.log("Error:", error)
        res.status(500).json({ message: "Server Error" })
    }
}

const deleteProductItem = async (req, res) => {
    try {
        await ProductItem.findByIdAndDelete(req.params.id)
        res.status(204).send()
    } catch (error) {
        console.log("Error:", error)
        res.status(500).json({ message: "Server Error" })
    }
}

module.exports = { createProductItem, getProductItems, singleProductItem, updateProductItem, deleteProductItem }