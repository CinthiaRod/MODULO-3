// Ejercicio 9: Sistema de Tienda en Línea
// Consigna: Desarrolla un sistema para una tienda en línea. 
// Crea una clase base Producto que tenga propiedades como nombre, precio, y un método detallesProducto().
class Producto {
    public nombre: string;
    public precio: number;
  
    constructor(nombre: string, precio: number) {
      this.nombre = nombre;
      this.precio = precio;
    };
  
    detallesProducto(): string {
      return `Producto: ${this.nombre}, Precio: $${this.precio}`;
    };
};

// Crea una interfaz Envio que defina el método calcularEnvio().
interface Envio {
    calcularEnvio(): number;
  };

// Luego, crea dos clases derivadas: Electronico y Ropa, ambas deben sobrescribir el método detallesProducto() con información más específica.
//  La clase Electronico debe implementar esta interfaz y el cálculo del envío será un 10% del precio del producto.
class Electronico extends Producto implements Envio {
    public marca: string;
    public modelo: string;
  
    constructor(nombre: string, precio: number, marca: string, modelo: string) {
      super(nombre, precio);
      this.marca = marca;
      this.modelo = modelo;
    };
  
    detallesProducto(): string {
      return `${super.detallesProducto()}, Marca: ${this.marca}, Modelo: ${this.modelo}`;
    };
  
    calcularEnvio(): number {
      return this.precio * 0.05; //El envió será 5% del costo del producto
    };
  };
  
  class Ropa extends Producto {
    public talla: string;
    public color: string;
  
    constructor(nombre: string, precio: number, talla: string, color: string) {
      super(nombre, precio);
      this.talla = talla;
      this.color = color;
    };
  
    detallesProducto(): string {
      return `${super.detallesProducto()}, Talla: ${this.talla}, Color: ${this.color}`;
    };
  };

//Ejemplo de uso
const productoElectronico = new Electronico("Celular", 7500, "Apple", "iPhone 16")
const productoRopa = new Ropa("Vestido", 250, "M", "Negro")
console.log(productoElectronico.detallesProducto());
console.log(`Costo de enviío del producto: $${productoElectronico.calcularEnvio().toFixed(2)}`);
console.log("\n", productoRopa.detallesProducto());