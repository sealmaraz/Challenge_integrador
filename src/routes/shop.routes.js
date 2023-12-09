const express = require('express');
// no va esto porque no usaré un nuevo servidor const app = express();
const router = express.Router();

router.get('/', (req, res) => res.send('Ruta a la vista de Shop'));
router.get('/item/:id', (req, res) => {
    const id = req.params.id;
    res.send(`Ruta a la vista de Item ${id}`)
});
router.get('/cart', (req, res) => res.send('Ruta a la vista de Carrito'));
router.post('/item/:id/add', (req, res) => {
    const id = req.params.id;
    res.send(`Visa de alta de item ${id}`);
});
router.post('/cart', (req, res) => s.send('Ruta de envío de datos desde Carrito para comprar'));

module.exports = router;