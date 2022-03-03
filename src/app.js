const express = require('express');
const morgan = require('morgan');
const rutas = require('./Rutas');
const path = require('path');
require('dotenv').config();
const app = express(); //app es el servidor
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set('json spaces', 2);
//app.use('/usuario/img/', express.static(path.join(__dirname, 'public/img')));
app.use('/api/', rutas);
app.use('/api/personas/', require('./Rutas/rutasPersonas'));
app.use('/api/usuarios/', require('./Rutas/rutasUsuarios'));
app.use('/api/autenticacion/', require('./Rutas/rutasAuth'));
app.use('/api/productos/', require("./rutas/rutasProductos"));
app.use('/api/tipos/', require("./rutas/rutasTipos"));
app.use('/api/proveedores/', require("./rutas/rutasProveedores"));
app.use('/api/compras/', require("./Rutas/rutasCompras"));
app.use('/api/detallecompra/', require("./Rutas/rutasDetalleCompras"));
//app.use('/api/archivos/', require('./rutas/rutasArchivos'));
app.listen(4001, ()=>{
    console.log("Servidor iniciado en el puerto 4001");
}); 