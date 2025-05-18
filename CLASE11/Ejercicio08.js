// 8. Simulación de Descarga de Archivos con Manejo de Errores
// Crea una función que simule la descarga de un archivo. Si el nombre del archivo es null o undefined, 
// la descarga debe fallar y lanzar un error. Utiliza try/catch para manejar el error de manera adecuada.
// Detalles:
// •La función descargarArchivo debe recibir el nombre del archivo como parámetro.
// •Si el archivo es válido, simula la descarga con un retardo de 2 segundos y retorna el mensaje "Archivo [nombre] descargado".
// •En caso de que el nombre sea null o undefined, lanza el error "Error en la descarga".
// •Usa una función iniciarDescarga para invocar descargarArchivo y manejar el error.
async function descargarArchivo(nombreArchivo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (nombreArchivo === null || nombreArchivo === undefined) {
        reject(new Error("Error en la descarga: Nombre de archivo inválido."));
      } else {
        resolve(`Archivo "${nombreArchivo}" descargado.`);
      };
    }, 2000); 
  });
};

async function iniciarDescarga(nombre) {
  try {
    const resultadoDescarga = await descargarArchivo(nombre);
    console.log(resultadoDescarga);
    console.log("Proceso de descarga finalizado.");
  } catch (error) {
    console.error(error.message);
    console.log("Proceso de descarga finalizado con error.");
  };
};

// Ejemplos de uso
iniciarDescarga("Archivo1.pdf");
iniciarDescarga(null);
iniciarDescarga(undefined);
iniciarDescarga("archiv.doc");