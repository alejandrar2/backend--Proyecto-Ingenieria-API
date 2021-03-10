var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');


class Producto extends Model { }

Producto.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.BOOLEAN
},
    {
        sequelize,
        modelName: 'producto',
        timestamps: false
    }
);


module.exports = Producto;