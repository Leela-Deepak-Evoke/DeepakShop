const express = require('express')
const router = express.Router()
const buyerController = require('../controllers/buyerController')

//buyer APIs
router.post('/add-buyer',buyerController.createBuyer)
router.get('/all-buyers',buyerController.getBuyers)
router.get('/buyer/:id',buyerController.singleBuyer)
router.put('/updateBuyer/:id',buyerController.updateBuyer)
router.delete('/deleteBuyer/:id',buyerController.deleteBuyer)

module.exports = router