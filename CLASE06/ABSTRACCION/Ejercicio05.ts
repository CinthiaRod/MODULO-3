// Ejercicio 5: Decidir Entre Clases Abstractas e Interfaces
// Diseña un sistema de transporte público. Define: Una interfaz VehiculoElectrico con el método cargarBateria().
interface VehiculoElectrico {
    cargarBateria(): void;
  };

// Una clase abstracta Transporte con el método abstracto mover().
abstract class Transporte {
    constructor(protected pasajeros: number) {
     console.log("El autobús transporta:", this.pasajeros, "pasajeros.");
    };
  
    abstract mover(): void;
  };

// Implementa ambas estructuras en una clase concreta AutobusElectrico.
class AutobusElectrico extends Transporte implements VehiculoElectrico {
    mover(): void {
      console.log("El autobús eléctrico comenzo a moverse en su ruta.");
    };
    cargarBateria(): void {
      console.log("Cargando la batería del autobús eléctrico...");
    };
  };

 //Ejemplo de uso
 const autobus = new AutobusElectrico(30);
 autobus.cargarBateria()
 autobus.mover()
 

 
