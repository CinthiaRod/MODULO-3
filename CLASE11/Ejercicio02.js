// 2. Lectura de Datos con Retraso Simulado y Manejo de Errores
// Escribe una función que simule la obtención de datos de una base de datos o API. 
// La función debe simular un retraso de 2 segundos para obtener los datos. 
// Sin embargo, en ocasiones esta operación puede fallar (simula este fallo lanzando un error manualmente).
// Detalles:
// •Utiliza async y await para hacer que la función sea asíncrona.
// •Usa try/catch para capturar posibles errores.
// •Si todo va bien, muestra el mensaje "Datos obtenidos con éxito".
// •En caso de error, muestra "Error al leer datos".
async function obtenerDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.5; 
      if (exito) {
        resolve("Datos de la base de datos");
      } else {
        reject("¡Error en la lectura de datos!");
      };
    }, 2000); 
  });
};

async function procesarDatos() {
  try {
    const datos = await obtenerDatos();
    console.log("Datos obtenidos con éxito:", datos);
  } catch (error) {
    console.error("Error al leer datos:", error);
  };
};

procesarDatos();