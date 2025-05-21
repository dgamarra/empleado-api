// routes/empresaRoutes.js
const express = require('express');
const {
  getEmpresas,
  getEmpresaById,
  createEmpresa,
  updateEmpresa,
  deleteEmpresa
} = require('../controllers/empresaController');

const router = express.Router();

router.route('/')
  .get(getEmpresas)
  .post(createEmpresa);

router.route('/:id')
  .get(getEmpresaById)
  .put(updateEmpresa)
  .delete(deleteEmpresa);

module.exports = router;