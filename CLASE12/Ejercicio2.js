// Ejercicio 2: Crear un Endpoint POST para agregar usuarios
// Consigna: Ahora vamos a permitir que el cliente agregue nuevos usuarios a la lista. 
// Tu tarea es crear un endpoint POST que reciba los datos del usuario desde el cuerpo de la solicitud en formato JSON. 
// Los datos deben incluir name y email.
// Si alguno de estos datos falta, el servidor debe responder con un error (código
// 400).
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const usuarios = [
  { id: 1, name: 'Cinthia Rodriguez', email: 'cinthia28@ejemplo.com' },
  { id: 2, name: 'Emma López', email: 'emmaL@gmail.com' }
];

let id = 1; 

app.get('/usuarios', (req, res) => {
  res.json(usuarios);
});

app.post('/usuarios', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Se requiere nombre y correo electrónico.' });
  };

  const nuevoUsuario = { id: id++, name, email };
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);  
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});