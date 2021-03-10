var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');


class User extends Model { }

User.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
},
    {
        sequelize,
        modelName: 'user',
        timestamps: false
    }
);


module.exports = User;