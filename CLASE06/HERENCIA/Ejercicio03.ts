// Ejercicio 3: Herencia Múltiple Indirecta (vía Interfaces)
// Consigna: Crea dos interfaces: Volador con el método volar() y Transportable con el método transportar(). 
interface Volador {
    volar: () => void;
  };
  
  interface Transportable {
    transportar: () => void;
  };

// Luego crea una clase Avion que implemente ambas interfaces y sobrescriba los métodos.
class Avion implements Volador, Transportable {
    public modelo: string;
  
    constructor(modelo: string) {
      this.modelo = modelo;
    };
  
    volar(): void {
      console.log(`El avión ${this.modelo} está despegando.`);
    };
  
    transportar(): void {
      console.log(`El avión ${this.modelo} está transportando pasajeros y sus maletas.`);
    };
  };
  