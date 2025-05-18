// 1. Simulación de Tiempo de Respuesta de un Servidor
// Imagina que quieres simular cómo responde un servidor cuando un cliente realiza una petición. 
// Para este ejercicio, el servidor tiene un tiempo de respuesta variable (aleatorio) entre 1 y 3 segundos. 
// Debes escribir una función llamada simulacionServidor que simule este comportamiento utilizando async y await.
// La función deberá:
// •Tener un retardo de tiempo aleatorio.
// •Retornar el mensaje "Servidor listo" una vez que haya transcurrido el tiempo.
function obtenerRetardoAleatorio() {
  return Math.floor(Math.random() * 2000) + 1000; 
};

async function simulacionServidor() {
  const retardo = obtenerRetardoAleatorio();
  console.log(`Respuesta del servidor con un retardo de ${retardo / 1000} segundos...`);
  await new Promise(resolve => setTimeout(resolve, retardo));
  return "Servidor listo";
};

// Ejemplo de uso 
async function iniciarSimulacion() {
  const respuesta = await simulacionServidor();
  console.log(respuesta);
};

iniciarSimulacion();