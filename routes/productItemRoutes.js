const express = require('express')
const router = express.Router()
const productItemController = require('../controllers/productItemController')

//product Item APIs
router.post('/add-productItem',productItemController.createProductItem)
router.get('/all-productItems',productItemController.getProductItems)
router.get('/productItem/:id',productItemController.singleProductItem)
router.put('/updateproductItem/:id',productItemController.updateProductItem)
router.delete('/deleteproductItem/:id',productItemController.deleteProductItem)

module.exports = router