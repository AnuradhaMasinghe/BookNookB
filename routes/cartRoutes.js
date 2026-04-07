const express = require('express');
const authenticateJWT = require('../middleware/authenticateJWT');
const cartController = require('../controllers/cartController');
const router = express.Router();


router.get('/', authenticateJWT, cartController.getCartItems);
router.post('/add', authenticateJWT, cartController.addToCart);
router.delete('/:id', authenticateJWT, cartController.removeCartItem);
router.delete('/item/:itemId', authenticateJWT, cartController.removeCartItem);
router.put('/item/:itemId', authenticateJWT, cartController.updateCartItemQuantity);


module.exports = router;
