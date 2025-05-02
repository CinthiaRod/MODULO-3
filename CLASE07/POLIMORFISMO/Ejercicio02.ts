// Ejercicio 2: Polimorfismo con Sobreescritura de Métodos (Tiempo de Ejecución)
// Crea una jerarquía de clases de Vehiculo con dos clases derivadas: Coche y Moto. 
class Vehiculo {
    public marca: string;
    public modelo: string;
  
    constructor(marca: string, modelo: string) {
      this.marca = marca;
      this.modelo = modelo;
    };
  
    public arrancar(): string {
      return `El vehículo arrancará.`;
    };
  };

// Cada clase debe sobrescribir el método arrancar de la clase base para proporcionar una implementación específica de cómo arrancar.
class Coche extends Vehiculo {
    constructor(marca: string, modelo: string) {
      super(marca, modelo);
    };
  
    public arrancar(): string {
      super.arrancar(); 
      return `El coche ${this.marca} ${this.modelo} está por arrancar.  \nEl coche ${this.marca} ${this.modelo} ha encendido.`;
    };
  };
  class Moto extends Vehiculo {
    constructor(marca: string, modelo: string) {
      super(marca, modelo);
    };
  
    public arrancar(): string {
      return `La moto ${this.marca} ${this.modelo} está por arrancar.\nLa moto ${this.marca} ${this.modelo} ha encendido.`;
    };
  };

  //Ejemplo de uso
  const vehiculo = new Moto("Yamaha", "XMAX");
  const vehiculoDos = new Coche("Toyota", "Tacoma");
  console.log(vehiculo.arrancar());
  console.log(vehiculoDos.arrancar());