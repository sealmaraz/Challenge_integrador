const express = require('express');
//Montar el server
const app =express(); //aquí ejecuto express y guardo en una vble para poder tener acceso alos métodos
//asignar el puerto
const PORT=4000;
//acceso a carpeta public
app.use(express.static('public'));
//probar el servidor
app.get('/ping',(req, res)=> res.send('pong'));

app.listen(4000, ()=>console.log(`Puerto corriendo en http://localhost:${PORT}`));