const express = require('express');
// no va esto porque no usaré un nuevo servidor const app = express();
const router = express.Router();
const mainControllers = require('../controllers/main.controller');

router.get('/home', mainControllers.home);
router.get('/contacto',mainControllers.contacto);
router.get('/about',mainControllers.about);
router.get('/faqs',mainControllers.faqs);

module.exports = router;