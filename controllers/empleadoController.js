// controllers/empleadoController.js
const Empleado = require('../models/Empleado');
const Empresa = require('../models/Empresa');

// Obtener todos los empleados
exports.getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.find().populate('empresa', 'nombre');
    res.json(empleados);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener un empleado por ID
exports.getEmpleadoById = async (req, res) => {
  try {
    const empleado = await Empleado.findById(req.params.id).populate('empresa', 'nombre');
    if (!empleado) return res.status(404).json({ message: 'Empleado no encontrado' });
    res.json(empleado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Crear un nuevo empleado
exports.createEmpleado = async (req, res) => {
  try {
    const { nombre, apellido, cargo, empresa } = req.body;

    // Validar que exista la empresa
    const existeEmpresa = await Empresa.findById(empresa);
    if (!existeEmpresa) return res.status(404).json({ message: 'Empresa no encontrada' });

    const nuevoEmpleado = new Empleado({ nombre, apellido, cargo, empresa });
    await nuevoEmpleado.save();
    res.status(201).json(nuevoEmpleado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Actualizar un empleado
exports.updateEmpleado = async (req, res) => {
  try {
    const { nombre, apellido, cargo, empresa } = req.body;

    // Validar si se actualiza la empresa
    if (empresa) {
      const existeEmpresa = await Empresa.findById(empresa);
      if (!existeEmpresa) return res.status(404).json({ message: 'Empresa no encontrada' });
    }

    const empleado = await Empleado.findByIdAndUpdate(
      req.params.id,
      { nombre, apellido, cargo, empresa },
      { new: true, runValidators: true }
    );

    if (!empleado) return res.status(404).json({ message: 'Empleado no encontrado' });
    res.json(empleado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Eliminar un empleado
exports.deleteEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.findByIdAndDelete(req.params.id);
    if (!empleado) return res.status(404).json({ message: 'Empleado no encontrado' });
    res.json({ message: 'Empleado eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Obtener empleados por empresa
exports.getEmpleadosPorEmpresa = async (req, res) => {
  try {
    const empleados = await Empleado.find({ empresa: req.params.empresaId }).populate('empresa', 'nombre');
    if (!empleados.length) return res.status(404).json({ message: 'No hay empleados para esta empresa' });
    res.json(empleados);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};