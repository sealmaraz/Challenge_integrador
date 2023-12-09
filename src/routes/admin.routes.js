const express = require('express');

const router = express.Router();

router.get('/',(req, res)=> res.send('Envío a la página de Administración'));
router.get('/create',(req, res)=> res.send('Envío a la página de Administración para creación de nuevo item'));
router.post('/create',(req, res)=> res.send('Envío del nuevo item creado'));
router.get('/edit/:id',(req, res)=> {
    const id = req.params.id;
    res.send(`Envío a página para editar el Item ${id}`)
});
router.put('/edit/:id',(req, res)=> 
{
    const id = req.params.id;
    res.send(`Inserción de item ${id}`)
});
router.delete('/delete/:id',(req, res)=> 
{
    const id = req.params.id;
    res.send(`Eliminación de item ${id}`)
});

module.exports = router;