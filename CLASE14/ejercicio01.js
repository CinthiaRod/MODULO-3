// Ejercicio 1: Actualizar datos de un usuario 
// Crea un endpoint PUT para actualizar la información de un usuario existente en la lista. 
// El cliente debe enviar el ID del usuario como parámetro dinámico en la URL (por ejemplo, /users/1)
//  y los nuevos datos del usuario en el cuerpo de la solicitud en formato JSON.
// •Si el usuario no existe, responde con un error 404.
// •Si los datos enviados son incompletos (falta name o email), responde con un error 400.
// •Si todo está correcto, actualiza los datos del usuario y responde con el usuario actualizado.

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
let users = [
  { id: 1, name: "Emma", email: "Emma07@mail.com" },
  { id: 2, name: "Jayden", email: "Jayden@mail.com" }
];

app.put('/users/:id', (req, res) => {
  const { id } = req.params; 
  const { name, email } = req.body; 
  const userIndex = users.findIndex(user => user.id === parseInt(id)); 
  if (userIndex === -1) {
    return res.status(404).json({ error: "El usuario no existe." }); 
  }

  if (!name || !email) {
    return res.status(400).json({ error: "Se requieren los datos de name y email." }); 
  }

  users[userIndex] = { id: parseInt(id), name, email };
  res.json(users[userIndex]); 
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});