const express = require('express')
const router = express.Router()
const sellerItemController = require('../controllers/sellerItemController')

//seller Item APIs
router.post('/add-sellerItem',sellerItemController.createSellerItem)
router.get('/all-sellerItems',sellerItemController.getSellerItems)
router.get('/sellerItem/:id',sellerItemController.singleSellerItem)
router.put('/updateSellerItem/:id',sellerItemController.updateSellerItem)
router.delete('/deleteSellerItem/:id',sellerItemController.deleteSellerItem)

module.exports = router