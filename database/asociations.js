const User = require('../models/user');
const Producto = require('../models/producto');
const Categoria = require('../models/categoria');
const Denuncia = require('../models/denuncia');
const Administrador = require('../models/administrador');
const Departamento = require('../models/departamento');
const Municipio = require('../models/municipio');
const Persona = require('../models/persona');
const Servicio = require('../models/servicio');


//RELACION PRODUCTO - USUARIO ( Un usuario tiene muchos productos)
User.hasMany(Producto);

Producto.belongsTo(User);
//RELACION CATEGORIA - PRODUCTO (una categoria tiene muchos productos)
Producto.belongsTo(Categoria);

Categoria.hasMany(Producto);

//RELACION 
