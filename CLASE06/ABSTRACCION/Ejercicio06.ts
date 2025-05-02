// Ejercicio 6: Sistema de Gestión de Productos Usando Abstracción y Clases
// Crea un sistema de inventario que gestione diferentes tipos de productos.
// Define una clase abstracta Producto con: Propiedades protegidas: nombre, precio.
export abstract class Producto {
    constructor(protected nombre: string, protected precio: number) {
        console.log(`Nombre del producto: ${this.nombre} ----------------- Precio: $${this.precio}`);
    };
// Un método abstracto calcularDescuento().
    abstract calcularDescuento(): number;
};
// Implementa dos subclases: Ropa y Electronica.
// La subclase Ropa aplicará un 10% de descuento.
class Ropa extends Producto {
    calcularDescuento(): number {
        let descuento = this.precio * 0.10
      return this.precio - descuento
    };
  };

// La subclase Electronica tendrá un 5% de descuento.
class Electronica extends Producto {
    calcularDescuento(): number {
        let descuentoElectronica = this.precio * 0.05
      return this.precio - descuentoElectronica
    };
  };

// Añade un método concreto en la clase abstracta para mostrar la información del producto.
const vestido = new Ropa("Vestido", 350);
  const celular = new Electronica("Celular", 7800);
  console.log("\nInformación de descuentos:");
  console.log(`Precio con descuento del vestido es: $${vestido.calcularDescuento()}`); 
  console.log(`Precio con descuento del celular es: $${celular.calcularDescuento()}`); 
  