// Ejercicio 4: Practicando desestructuración de objetos
// Consigna: Dado el siguiente objeto JSON enviado en el cuerpo de la solicitud:
// {
// "name": "Katherine Johnson",
// "email": "katherine@example.com",
// "age": 42
// }
// Crea un endpoint POST que use desestructuración para extraer name y email. 
// Luego, responde con un mensaje que incluya estos valores. Si el cliente envía datos incompletos, 
// responde con un error 400.
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/add-user', (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).send('Faltan datos obligatorios');
    };
    res.json({ message: `Usuario ${name} con correo ${email} agregado con éxito` });
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
