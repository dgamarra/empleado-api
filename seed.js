// seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Empresa = require('./models/Empresa');
const Empleado = require('./models/Empleado');

const seedData = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  // Eliminar datos anteriores
  await Empresa.deleteMany({});
  await Empleado.deleteMany({});

  // Insertar empresas
  const empresa1 = new Empresa({
    nombre: 'Tech Solutions',
    direccion: 'Av. Tecnología 123',
    telefono: '123-456-7890'
  });

  const empresa2 = new Empresa({
    nombre: 'Consultoría Global',
    direccion: 'Calle Consultores 456',
    telefono: '987-654-3210'
  });

  await empresa1.save();
  await empresa2.save();

  // Insertar empleados
  const empleados = [
    { nombre: 'Carlos', apellido: 'Pérez', cargo: 'Desarrollador', empresa: empresa1._id },
    { nombre: 'María', apellido: 'López', cargo: 'Analista', empresa: empresa1._id },
    { nombre: 'Javier', apellido: 'García', cargo: 'Diseñador', empresa: empresa1._id },
    { nombre: 'Ana', apellido: 'Martínez', cargo: 'QA Tester', empresa: empresa1._id },
    { nombre: 'Lucía', apellido: 'Sánchez', cargo: 'Backend Developer', empresa: empresa1._id },

    { nombre: 'Pedro', apellido: 'Ramírez', cargo: 'Gerente', empresa: empresa2._id },
    { nombre: 'Laura', apellido: 'Fernández', cargo: 'RRHH', empresa: empresa2._id },
    { nombre: 'Diego', apellido: 'Torres', cargo: 'Contador', empresa: empresa2._id },
    { nombre: 'Valentina', apellido: 'Castro', cargo: 'Marketing', empresa: empresa2._id },
    { nombre: 'Sebastián', apellido: 'Ortega', cargo: 'Frontend Developer', empresa: empresa2._id }
  ];

  await Empleado.insertMany(empleados);

  console.log('Datos insertados correctamente.');
  mongoose.disconnect();
};

seedData();