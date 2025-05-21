// controllers/empresaController.js
const Empresa = require('../models/Empresa');

exports.getEmpresas = async (req, res) => {
  try {
    const empresas = await Empresa.find();
    res.json(empresas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getEmpresaById = async (req, res) => {
  try {
    const empresa = await Empresa.findById(req.params.id).populate('empleados');
    if (!empresa) return res.status(404).json({ message: 'Empresa no encontrada' });
    res.json(empresa);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createEmpresa = async (req, res) => {
  try {
    const nuevaEmpresa = new Empresa(req.body);
    await nuevaEmpresa.save();
    res.status(201).json(nuevaEmpresa);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.updateEmpresa = async (req, res) => {
  try {
    const empresa = await Empresa.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!empresa) return res.status(404).json({ message: 'Empresa no encontrada' });
    res.json(empresa);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteEmpresa = async (req, res) => {
  try {
    const empresa = await Empresa.findByIdAndDelete(req.params.id);
    if (!empresa) return res.status(404).json({ message: 'Empresa no encontrada' });

    // Opcional: eliminar también empleados asociados
    await Empleado.deleteMany({ empresa: req.params.id });

    res.json({ message: 'Empresa eliminada correctamente' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};