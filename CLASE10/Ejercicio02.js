// Ejercicio 2: Promesas - Simulador de Envío de Correos Electrónicos
// Consigna:
// Vas a crear una función llamada enviarCorreo() que simule el envío de un correo electrónico usando una promesa. 
//La promesa debe cumplir con los siguientes requisitos:
// 1.Resolver si el correo fue enviado exitosamente (usa Math.random() para simular éxito o error).
// 2.Rechazar si ocurre un fallo en el envío.
// 3.La operación debe tardar 2 segundos en completarse (usa setTimeout()).
function enviarCorreo(destinatario) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.5; 

      if (exito) {
        resolve(`Correo enviado a ${destinatario}`);
      } else {
        reject(`Error: No se pudo enviar el correo a ${destinatario}`);
      };
    }, 2000); 
  });
};


// 4.Implementa .then(), .catch(), y .finally() para manejar la respuesta:
// oSi el correo se envía exitosamente, imprime el mensaje: "Correo enviado a [destinatario]".
// oSi falla, imprime: "Error: No se pudo enviar el correo a [destinatario]".
// oEn finally(), muestra siempre el mensaje: "Operación finalizada".
// Implementa la función para enviar correos a dos destinatarios distintos.

const destinatario1 = "Emma07@gmail.com";
const destinatario2 = "Jayden27@gmail.com";

enviarCorreo(destinatario1)
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.error(error))
  .finally(() => console.log("Operación finalizada"));

enviarCorreo(destinatario2)
  .then((mensaje) => console.log(mensaje))
  .catch((error) => console.error(error))
  .finally(() => console.log("Operación finalizada"));