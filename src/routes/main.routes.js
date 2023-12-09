const express = require('express');
// no va esto porque no usaré un nuevo servidor const app = express();
const router = express.Router();

router.get('/home',(req, res)=> res.send('Ruta a la vista de Home'));
router.get('/contacto',(req, res)=> res.send('Ruta a la vista de Contacto'));
router.get('/about',(req, res)=> res.send('Ruta a la vista de About'));
router.get('/faqs',(req, res)=> res.send('Ruta a la vista de preguntas frecuentes'));

module.exports = router;