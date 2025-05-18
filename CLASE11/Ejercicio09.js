// 9. Ejecución Condicional en Base a Resultados de Promesas
// Imagina que necesitas ejecutar una tarea sólo si otra ha sido exitosa. 
// Crea una función tarea1 que simule la realización de una tarea en 2 segundos. 
// Luego, escribe otra función tarea2 que dependa de la finalización exitosa de tarea1. 
// Si tarea1 se completa, tarea2 debe ejecutarse; de lo contrario, no debe ejecutarse nada.
function tarea1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.5; 
      if (exito) {
        console.log("Tarea 1 completada con éxito.");
        resolve("Resultado de Tarea 1");
      } else {
        console.error("Tarea 1 falló.");
        reject("Error en Tarea 1");
      };
    }, 2000); 
  });
};

function tarea2(resultadoTarea1) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tarea 2 ejecutada después de Tarea 1.");
      console.log("Resultado de Tarea 1 recibido:", resultadoTarea1);
      resolve("Tarea 2 completada.");
    }, 2000);
  });
};

async function ejecutarTareas() {
  try {
    const resultadoTareaUno = await tarea1();
    await tarea2(resultadoTareaUno);
    console.log("Ambas tareas completadas con éxito.");
  } catch (error) {
    console.error("El proceso detenido, error en la Tarea 1.");
  };
};

ejecutarTareas();