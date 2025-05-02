// Ejercicio 2: Clases Abstractas - Sistema de Vehículos
// Crea una clase abstracta Vehiculo con una propiedad velocidad y un método abstracto mover(). 
abstract class Vehiculo {
    protected velocidad: number;

    constructor(velocidad: number) {
        this.velocidad = velocidad;
    };

    abstract mover(): void;
};
  
// Luego, implementa dos clases concretas: Auto y Bicicleta. 
class Auto extends Vehiculo {
    constructor(velocidad: number) {
        super(velocidad);
    };

    mover(): void {
        console.log(`Moviendo el auto a ${this.velocidad} km/h...`);
    };
};


class Bicicleta extends Vehiculo {
    constructor(velocidad: number) {
        super(velocidad);
    };

    mover(): void {
        console.log(`Moviendo la bicicleta a ${this.velocidad} km/h...`);
    };
};

// Usa los modificadores de acceso para controlar la visibilidad de las propiedades.
const auto = new Auto(50);
const bicicleta = new Bicicleta(8);

auto.mover();
bicicleta.mover();