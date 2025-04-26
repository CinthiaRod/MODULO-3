// Ejercicio 7: Modificadores de Acceso
// 1.Define una clase Coche con propiedades marca, modelo (públicas) y precio (privada).
class Coche {
    public marca: string;
    public modelo: string;
    private precio: number;
  
    constructor(marca: string, modelo: string, precio: number) {
      this.marca = marca;
      this.modelo = modelo;
      this.precio = precio;
    };
  

// 2.Implementa un método para mostrar la información del coche que acceda a las propiedades públicas y no a la privada directamente
mostrarInformacion(): void {
    console.log(`Marca: ${this.marca}`);
    console.log(`Modelo: ${this.modelo}`);
    console.log(`Precio: $${this.obtenerPrecio()}`); 
  };
  private obtenerPrecio(): number {
    return this.precio;
  };
};

//Ejemplo
const coche = new Coche("Jeep", "Liberty", 80000);
coche.mostrarInformacion();