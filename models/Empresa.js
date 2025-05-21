// models/Empresa.js
const mongoose = require('mongoose');

const EmpresaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono: { type: String, required: true }
});

module.exports = mongoose.model('Empresa', EmpresaSchema);