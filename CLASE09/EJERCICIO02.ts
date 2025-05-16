// 2. Florería: Envío Programado de Pedidos
// Crea un sistema que gestione el envío de pedidos de flores. 
// Cada pedido debe contener el nombre del cliente, la cantidad de flores y el tipo de flores. 
interface Pedido {
    idCliente: string;
    cantidadFlores: number;
    tipoFlores: string;
    fechaPedido: Date;
};

class Floreria {
    private pedidosPendientes: Pedido[] = [];

// Implementa las siguientes funciones:
// Añadir un pedido.

agregarPedido(idCliente: string, cantidadFlores: number, tipoFlores: string): void {
    const nuevoPedido: Pedido = {
        idCliente,
        cantidadFlores,
        tipoFlores,
        fechaPedido: new Date()
    };
    this.pedidosPendientes.push(nuevoPedido);
    console.log(`Pedido de ${cantidadFlores} '${tipoFlores}' para ${idCliente} añadido.`);
};


// Programar el envío de un pedido utilizando setTimeout() para simular un retraso de 5 segundos.
programarEnvio(idCliente: string): void {
    const pedidoAEnviarIndex = this.pedidosPendientes.findIndex(pedido => pedido.idCliente === idCliente);

    if (pedidoAEnviarIndex !== -1) {
        const pedidoAEnviar = this.pedidosPendientes[pedidoAEnviarIndex];
        console.log(`Programando envío de ${pedidoAEnviar.cantidadFlores} '${pedidoAEnviar.tipoFlores}' para ${idCliente} en 5 segundos...`);

        setTimeout(() => {
            this.enviarPedido(pedidoAEnviar);
            this.pedidosPendientes.splice(pedidoAEnviarIndex, 1);
        }, 5000);
    } else {
        console.log(`No se encontró ningún pedido pendiente.`);
    };
};

private enviarPedido(pedido: Pedido): void {
    console.log(`\n--- Enviando Pedido ---`);
    console.log(`Cliente: ${pedido.idCliente}`);
    console.log(`Cantidad: ${pedido.cantidadFlores}`);
    console.log(`Tipo de Flores: ${pedido.tipoFlores}`);
    console.log(`Fecha del Pedido: ${pedido.fechaPedido.toLocaleString()}`);
    console.log(`¡Pedido enviado!`);
};

// Mostrar todos los pedidos pendientes.
mostrarPedidosPendientes(): void {
    if (this.pedidosPendientes.length === 0) {
        console.log("No hay pedidos pendientes.");
        return;
    };

    console.log("\n--- Pedidos Pendientes ---");
    this.pedidosPendientes.forEach((pedido, index) => {
        console.log(`${index + 1}. Cliente: ${pedido.idCliente}, Cantidad: ${pedido.cantidadFlores}, Tipo: ${pedido.tipoFlores}, Fecha: ${pedido.fechaPedido.toLocaleDateString()}`);
    });
};
};

// Ejemplo de uso
const miFloreria = new Floreria();

miFloreria.agregarPedido("Cinthia", 12, "Girasoles");
miFloreria.agregarPedido("Blanca", 24, "Rosas");
miFloreria.agregarPedido("Ema", 6, "lilis");

miFloreria.mostrarPedidosPendientes();
miFloreria.programarEnvio("Cinthia");


miFloreria.mostrarPedidosPendientes(); 


setTimeout(() => {
miFloreria.mostrarPedidosPendientes(); 
}, 8000);

