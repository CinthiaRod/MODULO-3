// 4. Simulación de Proceso de Pago Asíncrono con Manejo de Errores
// Diseña una función que simule un proceso de pago que tarda 3 segundos en completarse. 
// Si el monto del pago es superior a $1000, el proceso debe fallar y lanzar un error.
//  Utiliza try/catch para manejar el error de manera adecuada.
async function pago(monto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (monto > 1000) {
        reject(`Error: El monto de $${monto} excede el límite permitido.`);
      } else {
        resolve(`Pago completado con éxito.`);
      };
    }, 3000); 
  });
};

async function procesarPago(montoPago) {
  try {
    const resultado = await pago(montoPago);
    console.log(resultado);
  } catch (error) {
    console.error("Error en el proceso de pago...", error);
  } finally {
    console.log("Proceso de pago finalizado.");
  };
};

// Ejemplos de uso
procesarPago(500);
procesarPago(1800);