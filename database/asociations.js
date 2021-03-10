const User = require('../models/user');
const Producto = require('../models/producto');



//RELACION PRODUCTO - USUARIO ( Un usuario tiene muchis productos)

User.hasMany(Producto);

Producto.belongsTo(User);

