const express = require('express');
const sequelize = require('./database/conexion');
const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
require('./database/asociations');

// Rutas
app.use('/app', require('./routes/app'));

app.listen(3000, () => {

    sequelize.sync().then(con => console.log('Conectado'));

    console.log(`Server on port http://localhost:3000`)
});