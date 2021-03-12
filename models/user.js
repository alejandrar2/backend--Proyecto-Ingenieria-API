var { Model, DataTypes } = require('sequelize');
var sequelize = require('../database/conexion');


class User extends Model { }

User.init({
    
    
    correo: DataTypes.STRING,
    contrasenia: DataTypes.STRING
},
    {
        sequelize,
        modelName: 'user',
        timestamps: false
    }
);


module.exports = User;