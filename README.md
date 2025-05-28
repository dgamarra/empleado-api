#  empleados-API

> API RESTful desarrollada con **Node.js**, **Express** y **MongoDB/Mongoose** para gestionar empresas y empleados.  
Este proyecto forma parte de una aplicación más amplia basada en la arquitectura **MERN**.

## Descripción del Proyecto

Esta API permite gestionar información sobre **empresas** y sus **empleados**, incluyendo operaciones CRUD completas:

- Crear, leer, actualizar y eliminar **empresas**
- Crear, leer, actualizar y eliminar **empleados**
- Listar los **empleados asociados a una empresa**

---

## Tecnologías Utilizadas

| Tecnología      | Versión Sugerida |
|----------------|------------------|
| Node.js        | v18.x o superior |
| Express        | ^4.18.x          |
| MongoDB        | 5.x o Atlas      |
| Mongoose       | ^7.x             |
| Nodemon (dev)  | ^3.x             |

---

##  Instrucciones de Instalación

### 1. Hacer **fork** del repositorio
Antes de clonarlo, haz clic en el botón **Fork** en la esquina superior derecha del repositorio en GitHub para crear tu propia copia.

### 2. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/empleados-API.git
cd empleados-API
```

### 3. Instalar dependencias:
```bash
npm install
```

### 4. Configurar variables de entorno:
Crea un archivo `.env` con el siguiente contenido:

```env
PORT=3000
MONGO_URI=mongodb://localhost:27017/empleadosDB
```

> Reemplaza la URI si usas **MongoDB Atlas**.

---

##  Iniciar el Proyecto

### 1. Levantar el servidor (modo desarrollo):
```bash
npm run dev
```

### 2. (Opcional) Insertar datos iniciales:
```bash
npm run seed
```
## Rutas Disponibles

| Método | Ruta                          | Descripción                              |
|--------|-------------------------------|------------------------------------------|
| GET    | `/api/empresas`               | Obtener todas las empresas               |
| GET    | `/api/empresas/:id`           | Obtener empresa por ID                   |
| POST   | `/api/empresas`               | Crear nueva empresa                      |
| PUT    | `/api/empresas/:id`           | Actualizar empresa                       |
| DELETE | `/api/empresas/:id`           | Eliminar empresa                         |
| GET    | `/api/empleados`              | Obtener todos los empleados              |
| GET    | `/api/empleados/:id`          | Obtener empleado por ID                  |
| POST   | `/api/empleados`              | Crear nuevo empleado                     |
| PUT    | `/api/empleados/:id`          | Actualizar empleado                      |
| DELETE | `/api/empleados/:id`          | Eliminar empleado                        |
| GET    | `/api/empleados/empresa/:id`  | Obtener empleados por empresa            |


## Pruebas con cURL

Ejemplo: obtener todas las empresas
```bash
curl http://localhost:3000/api/empresas
```

Ejemplo: crear un empleado
```bash
curl -X POST http://localhost:3000/api/empleados \
  -H "Content-Type: application/json" \
  -d '{
        "nombre": "Carlos",
        "apellido": "García",
        "cargo": "Desarrollador",
        "empresa": "<ID_EMPRESA>"
      }'
```

## Documentación Adicional

- [Guía de instalación de cURL](https://curl.se/download.html)
- [Uso básico de MongoDB](https://docs.mongodb.com/manual/)
- [Documentación de Mongoose](https://mongoosejs.com/docs/)


## Soporte

Para dudas o problemas técnicos, contacta al líder del grupo o envía un mensaje al canal de comunicación definido por el equipo de desarrollo.


## Créditos

Proyecto desarrollado por el Grupo X del curso de Taller de Proyectos – Institución Educativa XYZ.
