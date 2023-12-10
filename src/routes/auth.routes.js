const express = require('express');

const router = express.Router();

const authControllers = require('../controllers/auth.controller')

router.get('/login', authControllers.login);
router.post('/login', authControllers.login_data);
router.get('/register', authControllers.register);
router.post('/register',authControllers.register_data);
router.get('/logout', authControllers.unlogin);

module.exports = router;