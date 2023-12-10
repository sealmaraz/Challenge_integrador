const express = require('express');

const router = express.Router();

const adminControllers = require('../controllers/admin.controller')

router.get('/',adminControllers.admin);
router.get('/create',adminControllers.create);
router.post('/create',adminControllers.create_data);
router.get('/edit/:id',adminControllers.edit_insert);
router.put('/edit/:id',adminControllers.edit_update);
router.delete('/delete/:id',adminControllers.edit_delete);

module.exports = router;