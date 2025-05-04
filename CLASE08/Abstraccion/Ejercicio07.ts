// Ejercicio 7: Comparación Completa - Sistema de Transporte Público
// Diseña un sistema que combine interfaces y clases abstractas para gestionar un transporte público.
// Define dos interfaces:
// Electrico con el método cargarBateria().
interface Electrico {
    cargarBateria(): void;
  };

// Combustible con el método llenarTanque().
interface Combustible {
    llenarTanque(): void;
  };

// Crea una clase abstracta Transporte con un método abstracto mover().
export abstract class Transporte {
    constructor(public capacidad: number) {
    console.log(`\nEl transporte tiene un capacidad de ${this.capacidad} de pasajeros`);
    };
    abstract mover(): void;
};
    
// Implementa dos clases:
// AutobusElectrico: Extiende de Transporte e implementa Electrico.
class AutobusElectrico extends Transporte implements Electrico {
    mover(): void {
      console.log("El autobús eléctrico está en servicio y movimiento.");
    };
    cargarBateria(): void {
      console.log("¡Cargando la batería del autobús eléctrico!");
    };
  };

// Taxi: Extiende de Transporte e implementa Combustible.
class Taxi extends Transporte implements Combustible {
    mover(): void {
      console.log("El taxi se mueve por la ciudad dando servicio.");
    };
    llenarTanque(): void {
      console.log("Llenando el tanque del taxi...");
    };
  };

  //Ejemplo de uso
  const transporteUno = new AutobusElectrico (12);
  transporteUno.mover()
  transporteUno.cargarBateria()
  const transporteDos = new Taxi(4)
  transporteDos.mover()
  transporteDos.llenarTanque()