// Ejercicio 11: Sistema de Gestión de Vehículos
// Consigna: Crea una clase base Vehiculo con propiedades como marca, modelo, y un método detallesVehiculo(). 
class Vehiculo {
    public marca: string;
    public modelo: string;
  
    constructor(marca: string, modelo: string) {
      this.marca = marca;
      this.modelo = modelo;
    };
  
    detallesVehiculo(): string {
      console.log("\n------Detalles del Vehiculo------");
      
      return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
    };
};

// Crea también una interfaz Mantenimiento que tenga el método calcularCostoMantenimiento().
interface Mantenimiento {
    calcularCostoMantenimiento(): number;
};

// Luego, crea dos clases derivadas: Automovil y Moto, cada una con propiedades adicionales y sobrescribiendo el método detallesVehiculo().
// Ambas clases derivadas deben implementar esta interfaz, pero con lógicas distintas para calcular el costo del mantenimiento.
class Automovil extends Vehiculo implements Mantenimiento {
    public numeroPuertas: number;
    public tipoCilindros: number;
  
    constructor(marca: string, modelo: string, numeroPuertas: number, tipoCilindros: number) {
      super(marca, modelo);
      this.numeroPuertas = numeroPuertas;
      this.tipoCilindros = tipoCilindros;
    };
  
    detallesVehiculo(): string {
      return `${super.detallesVehiculo()}, Puertas: ${this.numeroPuertas}, Cilindros: ${this.tipoCilindros}`;
    };
  
    calcularCostoMantenimiento(): number {
      let costo = 400; 
      if (this.tipoCilindros === 4) {
        costo += 500;
      } else if (this.tipoCilindros === 8) {
        costo += 700;
      };
      costo += this.numeroPuertas * 100;
      return costo;
    };
};
  
  class Moto extends Vehiculo implements Mantenimiento {
    public cilindrada: number;
    public tipoMoto: string; 
  
    constructor(marca: string, modelo: string, cilindrada: number, tipoMoto: string) {
      super(marca, modelo);
      this.cilindrada = cilindrada;
      this.tipoMoto = tipoMoto;
    };
  
    detallesVehiculo(): string {
      return `${super.detallesVehiculo()}, Cilindrada: ${this.cilindrada}cc, Tipo: ${this.tipoMoto}`;
    }
  
    calcularCostoMantenimiento(): number {
      let costo = 100; 
      costo += this.cilindrada * 0.10; 
      if (this.tipoMoto === "Deportiva") {
        costo += 200;
      } else if (this.tipoMoto === "Trabajo") {
        costo += 150;
      };
      return costo;
    };
};

//Ejemplo de uso
const automovil = new Automovil("Mazda", "Miata", 2, 4)
console.log(automovil.detallesVehiculo());
console.log(`Costo de Mantenimiento: $${automovil.calcularCostoMantenimiento()}`);

const moto = new Moto("Italika", "Cargo", 125, "Trabajo")
console.log(moto.detallesVehiculo());
console.log(`Costo de Mantenimiento: $${moto.calcularCostoMantenimiento()}`);
