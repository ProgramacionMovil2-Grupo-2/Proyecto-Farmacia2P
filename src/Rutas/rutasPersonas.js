const { Router } = require('express');
const controladorPersonas = require('../controladores/controladorPersonas');
const router = Router();

router.get('/', controladorPersonas.inicio);
router.get('/listar', controladorPersonas.listarPersonas);
router.post('/guardar', controladorPersonas.guardar);
router.put('/modificar', controladorPersonas.modificar);
router.delete('/eliminar', controladorPersonas.eliminar);
module.exports = router;