// 7. Simulación de Recuperación de Contraseña
// Crea una función que simule un proceso de recuperación de contraseña en el cual se envía un correo electrónico al usuario. 
// Esta función debe tardar 3 segundos en completarse y retornar un mensaje confirmando que el correo de recuperación ha sido enviado.
// Especificaciones:
// •La función debe llamarse recuperarContrasena y recibir como parámetro el correo electrónico del usuario.
// •Después de un retardo de 3 segundos, debe retornar el mensaje "Correo de recuperación enviado a [correo]".
// •En una función iniciarRecuperacion, llama a recuperarContrasena e imprime el mensaje cuando se complete la operación.
async function recuperarContrasena(correoElectronico) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`Correo de recuperación enviado a ${correoElectronico}`);
    }, 3000); 
  });
};

async function iniciarRecuperacion(correo) {
  console.log(`Iniciando proceso de recuperación de contraseña...`);
  const mensaje = await recuperarContrasena(correo);
  console.log(mensaje);
  console.log("Proceso de recuperación finalizado.");
};

// Ejemplo de uso
iniciarRecuperacion("Cinthia28@ejemplo.com");