const express = require('express');
const cors = require('cors');
const bodyParser = require ('body-parser');

const app = express ()
.use(cors({credentials: true, origin: 'http://localhost:4200'
}))
.use(bodyParser.json())
.use(bodyParser.urlencoded({ extended: true })); 


app.post('/registro/:edad', function(req, res) {
    let departamento = req.body.departamento;
    let ciudad = req.body.ciudad;
    let edad = req.params.edad;
    let nombre = req.body.nombre;
    let apellidos = req.body.apellidos;
    let direccion = req.body.direccion;
    let cabecera = req.header('Authorization');
    return res.status(201).json({"Status": "cabecera: valor de la cabecera enviada nombres: nombres enviados ciudad: ciudad enviada",
    departamento: departamento, ciudad:ciudad, edad:edad, nombre:nombre, apellidos:apellidos, direccion:direccion, cabecera:cabecera});
});


app.listen(10101, function () {
    console.log('Example app listening on port 10101!');
    });