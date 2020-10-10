'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app =express();

//cargar rutas
var user_routes = require('./routes/user');
var follow_routes = require('./routes/follow');

// cargar middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());




//cors


// rutas
app.get('/pruebas',(req , res)=>{
    res.status(200).send({
        message: 'accion'
    });



});
app.use('/api',user_routes);
app.use('/api',follow_routes);

// exportar

module.exports = app;