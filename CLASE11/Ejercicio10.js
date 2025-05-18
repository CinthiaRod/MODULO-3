// 10. Simulación de Actualización de Inventario con Validación de Stock
// Desarrolla una función que simule la actualización de un inventario después de una compra. 
// Si el inventario es insuficiente (cantidad <= 0), la actualización debe fallar y lanzar un error.
// Especificaciones:
// •La función actualizarInventario debe tomar un parámetro cantidad y simular un tiempo de actualización de 1.5 segundos.
// •Si la cantidad es mayor a 0, la función debe retornar el mensaje "Inventario actualizado".
// •En caso contrario, debe lanzar el error "Error: inventario insuficiente".
// •Usa try/catch en una función principal para manejar el error de manera adecuada.
async function actualizarInventario(cantidad) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cantidad > 0) {
        resolve("Inventario actualizado");
      } else {
        reject(new Error("Error: inventario insuficiente"));
      };
    }, 1500); 
  });
};

async function realizarCompra(cantidadCompra) {
  try {
    console.log(`Intentando actualizar el inventario después de comprar ${cantidadCompra} unidades...`);
    const resultadoActualizacion = await actualizarInventario(cantidadCompra);
    console.log(resultadoActualizacion);
    console.log("Proceso de compra y actualización de inventario completado.");
  } catch (error) {
    console.error("¡Error al procesar la compra!", error.message);
    console.log("El inventario no se actualizó.");
  } finally {
    console.log("Fin del proceso.");
  };
};

// Ejemplos de uso
realizarCompra(5);
realizarCompra(0);
realizarCompra(-1);
realizarCompra(10);