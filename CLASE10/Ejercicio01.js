// Ejercicio 1: Callbacks - Sistema de Pedidos de un Restaurante
// Consigna:
// Imagina que trabajas en un restaurante y tienes que gestionar varios pedidos al mismo tiempo. Crea una función llamada prepararPedido() que reciba como parámetros:
// •El nombre del plato
// •El tiempo estimado de preparación (en milisegundos)
// •Un callback que se ejecutará cuando el pedido esté listo
function prepararPedido(plato, tiempoPreparacion, callback) {
  console.log(`Preparando el pedido de ${plato} para el cliente...`);
  setTimeout(() => {
    console.log(`¡El pedido está listo!`);
    callback();
  }, tiempoPreparacion);
};

// Luego, simula la preparación de tres pedidos (por ejemplo: Pizza, Hamburguesa y Ensalada) con tiempos de preparación distintos. La función debe imprimir un mensaje al iniciar cada pedido y otro mensaje cuando el pedido esté listo. Además:
// 1.Implementa otro callback que se ejecute al final, después de todos los pedidos, para mostrar el mensaje: "¡Todos los pedidos han sido completados!".
// 2.Controla el orden en el que se imprimen los mensajes para evitar que se mezclen (es decir, no puede imprimirse el mensaje final hasta que todos los pedidos estén listos).
// Objetivo: Practicar el uso de callbacks anidados y la gestión de procesos asincrónicos. Asegúrate de que se ejecuta cada función en el momento correcto.
function mostrarMensajeFinal() {
  console.log("¡Todos los pedidos han sido completados!");
};
// Ejemplo de uso
prepararPedido("Pizza", 10000, () => {
  prepararPedido("Hamburguesa", 8000, () => {
    prepararPedido("Ensalada", 3000, () => {
      mostrarMensajeFinal	();
    });
  });
});