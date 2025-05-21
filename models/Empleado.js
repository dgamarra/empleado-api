// models/Empleado.js
const mongoose = require('mongoose');

const EmpleadoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  cargo: { type: String, required: true },
  empresa: { type: mongoose.Schema.Types.ObjectId, ref: 'Empresa', required: true }
});

module.exports = mongoose.model('Empleado', EmpleadoSchema);
