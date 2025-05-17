// Ejercicio 4: Promise.race() - Carrera entre Tareas
// Consigna:
// Crea tres promesas que representen tareas con tiempos de ejecución aleatorios. 
//Usa Promise.race() para que el programa imprima solo la primera tarea que se complete. 
// Luego:
// 1.Asegúrate de que se imprime qué tarea ganó la carrera.
// 2.Controla posibles errores si alguna de las promesas falla.
function crearTarea(nombre) {
  const tiempoAleatorio = Math.random() * 4000; 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.5; 
      if (exito) {
        resolve(`${nombre} completada en ${tiempoAleatorio.toFixed(2)} ms`);
      } else {
        reject(`Error: ${nombre} falló`);
      };
    }, tiempoAleatorio);
  });
};

const tarea1 = crearTarea("Tarea 1");
const tarea2 = crearTarea("Tarea 2");
const tarea3 = crearTarea("Tarea 3");

Promise.race([tarea1, tarea2, tarea3])
  .then((resultado) => {
    console.log("¡Carrera terminada!");
    console.log("Ganador:", resultado);
  })
  .catch((error) => {
    console.error("¡Carrera terminada con un error!");
    console.error("Error:", error);
  });