// routes/empleadoRoutes.js
const express = require('express');
const {
  getEmpleados,
  getEmpleadoById,
  createEmpleado,
  updateEmpleado,
  deleteEmpleado,
  getEmpleadosPorEmpresa
} = require('../controllers/empleadoController');

const router = express.Router();

router.route('/')
  .get(getEmpleados)
  .post(createEmpleado);

router.route('/:id')
  .get(getEmpleadoById)
  .put(updateEmpleado)
  .delete(deleteEmpleado);

router.route('/empresa/:empresaId')
  .get(getEmpleadosPorEmpresa);

module.exports = router;