// 7. Ejercicio de Bodega
// Diseña una clase Bodega que tenga propiedades privadas para nombre, direccion, y inventario
// (un array de objetos con producto y cantidad).
class Producto {
    public nombre: string;
    public precio: number;
    
    constructor(nombre: string, precio: number) {
        this.nombre = nombre;
        this.precio = precio;
    };
};
    
interface Inventario {
    producto: Producto;
    cantidad: number;
};
    
class Bodega {
    private nombre: string;
    private direccion: string;
    private inventario: Inventario[] = [];
    
    constructor(nombre: string, direccion: string) {
        this.nombre = nombre;
        this.direccion = direccion;
    };
    
// Implementa métodos para agregar productos al inventario, eliminar productos, y listar el inventario.
agregarProducto(producto: Producto, cantidad: number): void {
        if (cantidad <= 0) {
            console.log("La cantidad a agregar debe ser mayor a 0.");
            return;
        };
// Si se intenta agregar un producto con una cantidad negativa, imprime un mensaje informativo.
const buscarProducto = this.inventario.find(item => item.producto === producto);
    if (buscarProducto) {
        buscarProducto.cantidad += cantidad;
        console.log(`Se agregaron ${cantidad} piezas de '${producto.nombre}' al inventario.`);
    } else {
        this.inventario.push({ producto, cantidad });
        console.log(`Se agregó '${producto.nombre}' al inventario con ${cantidad} piezas.`);
    };
};
eliminarProducto(producto: Producto, cantidad: number): void {
        if (cantidad <= 0) {
            console.log("La cantidad a eliminar debe ser mayor a 0.");
             return;
            };
        const productoEnInventario = this.inventario.find(item => item.producto === producto);
        if (productoEnInventario) {
            if (cantidad >= productoEnInventario.cantidad) {
                this.inventario = this.inventario.filter(item => item.producto !== producto);
                console.log(`Se eliminaron todas las piezas de '${producto.nombre}' del inventario.`);
            } else {
                productoEnInventario.cantidad -= cantidad;
                console.log(`Se eliminaron ${cantidad} piezas de '${producto.nombre}' del inventario.`);
            };
        } else {
        console.log(`El producto '${producto.nombre}' no se encontró en el inventario.`);
    };
};
    
listarInventario(): void {
        if (this.inventario.length === 0) {
             console.log("El inventario está vacío.");
             return;
            };
            console.log("\n--- Inventario de la Bodega ---");
            console.log(`Nombre: ${this.nombre}`);
            console.log(`Dirección: ${this.direccion}`);
            this.inventario.forEach(item => {
            console.log(`  - Producto: ${item.producto.nombre}, Cantidad: ${item.cantidad}`);
        });
    };
};
    
// Ejemplo de uso
const bodegaUno = new Bodega("Bodega CR", "Corsica #500");
const productoUno = new Producto("Chocolate Cero", 10);
const productoDos = new Producto("Crema de Almendra", 59);
bodegaUno.agregarProducto(productoUno, 180);
bodegaUno.agregarProducto(productoDos, 50);
bodegaUno.listarInventario();
    
bodegaUno.agregarProducto(productoUno, 20);
bodegaUno.listarInventario();
    
bodegaUno.eliminarProducto(productoUno, 30);
bodegaUno.listarInventario();
    
bodegaUno.eliminarProducto(productoDos, 5);
bodegaUno.listarInventario();