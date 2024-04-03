const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

let conexion = mysql.createConnection({
    host: "localhost",
    database: "zxshop",
    user: "root",
    password: ""
})

// Middleware para servir archivos estáticos desde el directorio 'public'
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// Ruta para servir index.html cuando se acceda al directorio raíz '/'
app.get('/', (req, res) => {
  res.sendFile(__dirname + "index.html");
});

// Ruta para servir login.html cuando se acceda a '/login'
app.get('/login', (req, res) => {
  res.sendFile(__dirname + "login.html");
});

// Iniciar el servidor
app.listen(port, () => {
  console.log("Servidor Express escuchando en http://localhost:"+port);
});

// micodigogogogo

app.post("/validar", function(req,res){
    const datos = req.body;
    let id = datos.id;
    let nombres = datos.nombres;
    let apellidos = datos.apellidos;
    let correo = datos.correo;
    let contrasenia = datos.contrasenia
    
    let consulta = "INSERT INTO tabla_usuarios (id, nombres, apellidos, correo, contrasenia) VALUE ('"+id+"', '"+nombres+"', '"+apellidos+"', '"+correo+"', '"+contrasenia+"')"
    conexion.query(consulta, function(error){
        if(error){
            console.log("algo salió mal")
        }else{
            console.log("se almaceno correctamente")
        }
    })
})
