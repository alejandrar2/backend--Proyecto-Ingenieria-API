const User = require('../models/user');
const Producto = require('../models/producto');
const Categoria = require('../models/categoria');
const Denuncia = require('../models/denuncia');

//RELACION PRODUCTO - USUARIO ( Un usuario tiene muchos productos)
User.hasMany(Producto);

Producto.belongsTo(User);
//RELACION CATEGORIA - PRODUCTO (una categoria tiene muchos productos)
Producto.belongsTo(Categoria);

Categoria.hasMany(Producto);
