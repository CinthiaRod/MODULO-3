// Ejercicio 2: Eliminar un usuario 
// Crea un endpoint DELETE para eliminar un usuario de la lista utilizando un parámetro dinámico :id en la URL 
// (por ejemplo, /users/1).
// •Si el usuario no existe, responde con un error 404.
// •Si el usuario es eliminado exitosamente, responde con un mensaje confirmando la eliminación.

app.delete('/users/:id', (req, res) => {
  const { id } = req.params; 
  const userIndex = users.findIndex(user => user.id === parseInt(id));
  if (userIndex === -1) {
    return res.status(404).json({ error: "Usuario no encontrado" }); 
  }
  const deletedUser = users.splice(userIndex, 1);

  res.json({ message: "Usuario eliminado correctamente", usuario: deletedUser[0] }); 
});