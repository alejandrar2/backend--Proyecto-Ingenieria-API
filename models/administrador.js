var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');


class Administrador extends Model { }

Administrador.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
    
},
    {
        sequelize,
        modelName: 'administrador',
        timestamps: false
    }
);


module.exports = Administrador;