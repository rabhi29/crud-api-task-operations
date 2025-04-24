const express=require('express');
const router = express.Router();
const {getProduct,CreateProduct,updateproduct,deleteproduct,getoneprdct}=require('../controllers/product.controllers');
    
router.get('/',getProduct);
    
router.post('/',CreateProduct);
router.put('/:id',updateproduct);
router.delete('/:id',deleteproduct);
router.get('/:id',getoneprdct);
module.exports = router;