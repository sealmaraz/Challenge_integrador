const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
//Montar el server
const app =express(); //aquí ejecuto express y guardo en una vble para poder tener acceso alos métodos

//asignar el puerto
const PORT=4000;
//llamo al mainroutes
const mainRoutes = require(__dirname+'/src/routes/main.routes');
const shopRoutes = require(__dirname+'/src/routes/shop.routes');
const adminRoutes = require(__dirname+'/src/routes/admin.routes');
const authRoutes = require(__dirname+'/src/routes/auth.routes');

//acceso a carpeta public
app.use(express.static('public'));
app.use(express.urlencoded()); // al enviar info por body lo transfora o traduce a javascript
app.use(express.json());// al enviar info por body lo transfora o traduce a javascript
app.use(methodOverride('_method')); //desde los formularios puedo definir el método a utilizar adjuntando en la ruta ?_method=PUT

//app.use(express.urlencoded);
//probar el servidor
//app.get('/ping',(req, res)=> res.send('pong'));

app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', adminRoutes);
app.use('/auth', authRoutes);

app.listen(4000, ()=>console.log(`Puerto corriendo en http://localhost:${PORT}`));