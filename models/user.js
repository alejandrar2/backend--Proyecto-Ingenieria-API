var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');


class User extends Model { }

User.init({
    
    contraseña: DataTypes.STRING,
    correo: DataTypes.STRING
},
    {
        sequelize,
        modelName: 'user',
        timestamps: false
    }
);


module.exports = User;