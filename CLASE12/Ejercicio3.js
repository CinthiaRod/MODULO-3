// Ejercicio 3: Usar parámetros dinámicos con :id
// Consigna: En este ejercicio, vamos a permitir que el cliente busque información de un usuario por su ID. 
// Crea un endpoint GET que reciba un parámetro dinámico :id en la URL (por ejemplo, /users/1). 
// Usa req.params para capturar este valor y busca al usuario correspondiente en una lista. Si no se encuentra el usuario,
//  responde con un error 404.
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

app.get('/usuarios/:id', (req, res) => {
  const userId = parseInt(req.params.id); 

  const usuario = usuarios.find(u => u.id === userId);

  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).json({ error: 'Usuario no encontrado.' }); 
  };
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});