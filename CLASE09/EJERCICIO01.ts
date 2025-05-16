// 1. Mueblería: Actualización de Precios
// En una mueblería, se requiere un sistema que permita actualizar los precios de los muebles cada vez que cambien. 
// Cada mueble tiene un nombre, un precio y un identificador único. 
interface Mueble {
    id: number;
    nombre: string;
    precio: number;
};

class Muebleria {
    private inventario: Mueble[] = [];
    private id: number = 1;

// Implementa las siguientes funciones:
// Añadir un nuevo mueble.
agregarMueble(nombre: string, precio: number): void {
    const nuevoMueble: Mueble = {
        id: this.id++,
        nombre,
        precio
    };
    this.inventario.push(nuevoMueble);
    console.log(`Se añadió el mueble '${nombre}' con ID ${nuevoMueble.id} y precio $${nuevoMueble.precio}.`);
};

// Actualizar el precio de un mueble después de 3 segundos utilizando setTimeout().
actualizarPrecio(id: number, nuevoPrecio: number): void {
    const mueble = this.inventario.find(m => m.id === id);
    if (mueble) {
        console.log(`Actualización del precio de '${mueble.nombre}' (ID ${id}) a $${nuevoPrecio} en 3 segundos...`);
        setTimeout(() => {
            mueble.precio = nuevoPrecio;
            console.log(`El precio de '${mueble.nombre}' (ID ${id}) ha sido actualizado a $${nuevoPrecio}.`);
        }, 3000);
    } else {
        console.log(`No se encontró ningún mueble con el ID ${id}.`);
    };
};

// Mostrar el inventario de muebles.
mostrarInventario(): void {
    if (this.inventario.length === 0) {
        console.log("El inventario de muebles está vacío.");
        return;
    };
    console.log("\n--- Inventario de Muebles ---");
    this.inventario.forEach(mueble => {
        console.log(`ID: ${mueble.id}, Nombre: ${mueble.nombre}, Precio: $${mueble.precio.toFixed(2)}`);
    });
};
};

// Ejemplo de uso
const miMuebleria = new Muebleria();

miMuebleria.agregarMueble("Sofá ", 800);
miMuebleria.agregarMueble("Mesa de centro", 580);
miMuebleria.agregarMueble("Estantería de madera", 650);

miMuebleria.mostrarInventario();

miMuebleria.actualizarPrecio(1, 750);
miMuebleria.actualizarPrecio(3, 500);
miMuebleria.actualizarPrecio(4, 100); // Actualizar un mueble inexistente

setTimeout(() => {
console.log("\n--- Inventario después de las actualizaciones ---");
miMuebleria.mostrarInventario();
}, 5000);