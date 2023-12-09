const express = require('express');

const router = express.Router();

router.get('/login',(req, res) => res.send('Acceso a ventana de Login'));
router.post('/login',(req, res) => res.send('Envío de datos de login'));
router.get('/register',(req, res) => res.send('Acceso a ventana de registro'));
router.post('/register',(req, res) => res.send('Envío datos de formulario de registro'));
router.get('/logout',(req, res) => res.send('Envío a ventana de deslogueo del sitio'));

module.exports = router;