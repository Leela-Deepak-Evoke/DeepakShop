const express = require('express')
const router = express.Router()
const sellerController = require('../controllers/sellerController')

//seller APIs
router.post('/add-seller',sellerController.createSeller)
router.get('/all-sellers',sellerController.getSellers)
router.get('/seller/:id',sellerController.singleSeller)
router.put('/updateSeller/:id',sellerController.updateSeller)
router.delete('/deleteSeller/:id',sellerController.deleteSeller)

module.exports = router