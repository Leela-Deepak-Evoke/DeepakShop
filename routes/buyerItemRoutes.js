const express = require('express')
const router = express.Router()
const buyerItemController = require('../controllers/buyerItemContoller')

//buyer Item APIs
router.post('/add-buyerItem',buyerItemController.createBuyerItem)
router.get('/all-buyerItems',buyerItemController.getBuyerItems)
router.get('/buyerItem/:id',buyerItemController.singleBuyerItem)
router.put('/updateBuyerItem/:id',buyerItemController.updateBuyerItem)
router.delete('/deleteBuyerItem/:id',buyerItemController.deleteBuyerItem)

module.exports = router