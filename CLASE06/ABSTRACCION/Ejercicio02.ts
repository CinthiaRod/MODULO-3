// Ejercicio 2: Clases Abstractas - Sistema de Vehículos
// Crea una clase abstracta Vehiculo con una propiedad velocidad y un método abstracto mover(). 
interface Vehiculo { 
    mover(): void; // Método abstracto en la interfaz (implícito)
  };
  
// Luego, implementa dos clases concretas: Auto y Bicicleta. 
class Auto implements Vehiculo {
    mover(): void {
      console.log("Moviendo el auto...");
    };
  };

  class Bicicleta implements Vehiculo {
    mover(): void {
      console.log("Moviendo la bicicleta...");
    };
  };
// Usa los modificadores de acceso para controlar la visibilidad de las propiedades.
const auto = new Auto();
const bicicleta = new Bicicleta();

auto.mover();
bicicleta.mover();