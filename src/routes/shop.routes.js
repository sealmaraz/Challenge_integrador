const express = require('express');
// no va esto porque no usaré un nuevo servidor const app = express();
const router = express.Router();

const shopControllers = require('../controllers/shop.controller')

router.get('/', shopControllers.shop);
router.get('/item/:id', shopControllers.item_search);
router.get('/item/:id/add', shopControllers.item_add);
router.get('/cart', shopControllers.cart);
router.post('/cart', shopControllers.cart_add);

module.exports = router;