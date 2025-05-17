// Ejercicio 3: Métodos Estáticos - Gestionar múltiples tareas con Promise.all()
// Consigna:
// Simula la consulta a tres APIs diferentes que devuelven información sobre usuarios, productos y ventas.
// Cada consulta debe realizarse usando una función que retorne una promesa.
// Usa Promise.all() para esperar a que todas las consultas se completen y luego:
// 1.Imprime un mensaje con los resultados si todas las consultas fueron exitosas.
// 2.Si alguna falla, imprime un mensaje de error.
// 3.Usa un retraso distinto para cada promesa (por ejemplo, 2, 3 y 4 segundos).
// Opcional: Modifica el comportamiento para que si alguna consulta falla, se devuelva el mensaje: "No se pudo completar la operación: [API que falló]".
function consultaUsuarios() { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.5; 
      if (exito) {
        resolve({ usuarios: ["Usuario 1", "Usuario 2"] });
      } else {
        reject("Error al consultar la API de usuarios");
      }
    }, 2000); 
  });
}

function consultaProductos() { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.5;
      if (exito) {
        resolve({ productos: ["Producto A", "Producto B", "Producto C"] });
      } else {
        reject("Error al consultar la API de productos");
      }
    }, 3000); 
  });
}

function consultaVentas() { 
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = Math.random() > 0.5;
      if (exito) {
        resolve({ ventas: [{ producto: "A", cantidad: 10 }, { producto: "B", cantidad: 5 }] });
      } else {
        reject("Error al consultar la API de ventas");
      }
    }, 4000); 
  });
}

Promise.all([consultaUsuarios(), consultaProductos(), consultaVentas()])
  .then((resultados) => {
    console.log("¡Todas las consultas fueron exitosas!");
    console.log("Usuarios:", resultados[0].usuarios);
    console.log("Productos:", resultados[1].productos);
    console.log("Ventas:", resultados[2].ventas);
  })
  .catch((error) => {
    console.error("Error:", error);
    console.error("No se pudo completar la operación:", error); 
  });
