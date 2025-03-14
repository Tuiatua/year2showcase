var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

/* GET home page. */
router.get('/products/profile/:id', productController.renderProfile);
router.get('/products/edit/:id', productController.renderEditForm);
router.post('/products/edit/:id', productController.updateProduct);
router.get('/products', productController.viewProducts);
router.get('/products/add', productController.renderAddForm);
router.post('/products/add', productController.addProduct);

module.exports = router;
