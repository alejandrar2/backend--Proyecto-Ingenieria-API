const express = require('express');
const router = express.Router();
const Producto = require('../models/producto');
const User = require('../models/user');

router.get('/', (req, res) => {

    User.findAll({
        include:[{
            model: Producto
        }]
    }).then(usuario => {
        res.send(usuario );
        res.end();

    }).catch(error => {
        res.send(error)
    })

});

router.get('/:id', (req, res) => {

    User.findOne({
        where:{
            id: req.params.id
        },
        include:[{
            model: Producto
        }]
    }).then(usuario => {
        res.send(usuario );
        res.end();

    }).catch(error => {
        res.send(error)
    })

});

module.exports = router