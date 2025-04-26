// Ejercicio 9: Sistema de Gestión de Vehículos
// 1.Crea un sistema de gestión de Vehículos que incluya las siguientes clases:
// Vehiculo: Clase base con propiedades como marca, modelo y un método para mostrar información del vehículo.
class vehiculo {
    public marca: string;
    public modelo: string;
  
    constructor(marca: string, modelo: string) {
      this.marca = marca;
      this.modelo = modelo;
    };
    public mostrarInformacion(): void {
      console.log(`Marca: ${this.marca}`);
      console.log(`Modelo: ${this.modelo}`);
    };
  };

// Coche: Clase que extiende Vehiculo e incluye una propiedad para tipoCombustible y un método para mostrar la información completa del coche.
export class coche extends vehiculo {
  public tipoCombustible: string;
  constructor(marca: string, modelo: string, tipoCombustible: string) {
    super(marca, modelo);
    this.tipoCombustible = tipoCombustible;
  };
  public mostrarInformacionCompleta(): void {
    super.mostrarInformacion();
    console.log(`Tipo de Combustible: ${this.tipoCombustible}`);
  };
};

// Motocicleta: Clase que extiende Vehiculo e incluye una propiedad para cilindrada y un método para mostrar la información completa de la motocicleta.
class motocicleta extends vehiculo {
    public cilindrada: number;
    constructor(marca: string, modelo: string, cilindrada: number) {
      super(marca, modelo);
      this.cilindrada = cilindrada;
    };
    public mostrarInformacionCompleta(): void {
      super.mostrarInformacion();
      console.log(`Cilindrada: ${this.cilindrada} cc`);
    };
  };

  