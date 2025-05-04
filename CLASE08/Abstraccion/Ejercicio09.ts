// Ejercicio 9: Sistema de Gestión de Compras
// Crea un sistema que gestione productos y órdenes de compra. 
// Usa una clase abstracta Producto,
export abstract class Producto {
    constructor(public cantidad: number, public nombre: string, public precio: number) {}
    abstract calcularTotal(): number;

    mostrarDetalles(): string {
        return `${this.nombre}------------- $${this.precio}`;
    };
};

//  clases concretas Electrónico y Alimento, 
class Electronico extends Producto {
    constructor(cantidad: number, nombre: string, precio: number) {
        super(cantidad, nombre, precio);
    };
    calcularTotal(): number {
        return this.precio * this.cantidad;
    };
};

class Alimento extends Producto {
    constructor(cantidad: number, nombre: string, precio: number) {
        super(cantidad, nombre, precio);
    };
    
    calcularTotal(): number {
        return this.precio * this.cantidad;
    };
};

// y una clase OrdenCompra que contenga múltiples productos.
class OrdenCompra {
    private productos: Producto[] = [];

    agregarProducto(producto: Producto): void {
        this.productos.push(producto);
    };

    calcularSumaTotal(): number {
    return this.productos.reduce((total, producto) => total + producto.calcularTotal(), 0);
  };

  mostrarDetalles(): string {
    const listaProductos = this.productos.map(p => p.mostrarDetalles()).join('\n');
    return `Orden de Compra:\n${listaProductos}\nTotal: $${this.calcularSumaTotal()}`;
  }
};

//Ejemplo de uso
const orden = new OrdenCompra();
const electronico = new Electronico(1, "Laptop",12000);
orden.agregarProducto(electronico);
const alimento = new Alimento(2, "Chocolates", 10);
orden.agregarProducto(alimento);
 console.log(orden.mostrarDetalles());
 

