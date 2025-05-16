// Ejercicio 9: Implementación de Pac-Man con Herencia y Polimorfismo
// Crea un sistema que represente el juego Pac-Man utilizando clases.
// Define una interfaz EntidadMovible que contenga el método moverse.
interface EntidadMovible {
    moverse(direccion: Direccion): void; 
};

enum Direccion {
    Arriba,
    Abajo,
    Izquierda,
    Derecha
};

export abstract class Personaje implements EntidadMovible {
    protected posicion: [number, number]; 
    protected velocidad: number;

    constructor(posicionInicialX: number, posicionInicialY: number, velocidad: number) {
        this.posicion = [posicionInicialX, posicionInicialY];
        this.velocidad = velocidad;
    };

// Implementa métodos para moverse por el mapa y realizar acciones.
// Usa herencia para que Pac-Man y los fantasmas compartan el comportamiento de moverse
// y polimorfismo para que cada personaje pueda implementar su propio comportamiento de movimiento.
    abstract moverse(direccion: Direccion): void;

    abstract realizarAccion(): void;

    imprimirPosicion(): void {
        console.log(`La posición actual es: (${this.posicion[0]}, ${this.posicion[1]})`);
    };

    protected actualizarPosicion(deltaX: number, deltaY: number): void {
        this.posicion = [this.posicion[0] + deltaX * this.velocidad, this.posicion[1] + deltaY * this.velocidad];
    };
};

class PacMan extends Personaje {
    private vidas: number;
    private puntuacion: number;

    constructor(x: number, y: number) {
        super(x, y, 1);
        this.vidas = 3;
        this.puntuacion = 0;
    };

    comer(): void {
        this.puntuacion += 10;
        console.log(`Pac-Man come. Puntuación actual: ${this.puntuacion}`);
    };

    override realizarAccion(): void {
        this.comer();
    };

    override moverse(direccion: Direccion): void {
        switch (direccion) {
            case Direccion.Arriba:
                this.actualizarPosicion(0, -1);
                break;
            case Direccion.Abajo:
                this.actualizarPosicion(0, 1);
                break;
            case Direccion.Izquierda:
                this.actualizarPosicion(-1, 0);
                break;
            case Direccion.Derecha:
                this.actualizarPosicion(1, 0);
                break;
        };
        console.log(`Pac-Man se mueve hacia ${Direccion[direccion]}.`);
        this.imprimirPosicion();
    };
};

class Fantasma extends Personaje {
    private color: string;
    private modo: 'perseguir' | 'huir';

    constructor(x: number, y: number, color: string) {
        super(x, y, 0.8);
        this.color = color;
        this.modo = 'perseguir';
    };

    cambiarModo(): void {
        this.modo = this.modo === 'perseguir' ? 'huir' : 'perseguir';
        console.log(`Fantasma ${this.color} cambia al modo ${this.modo}.`);
    };

    override realizarAccion(): void {
        console.log(`Fantasma ${this.color} está en modo ${this.modo}.`);
    };

    override moverse(direccion: Direccion): void {
        switch (direccion) {
            case Direccion.Arriba:
                this.actualizarPosicion(0, -1);
                break;
            case Direccion.Abajo:
                this.actualizarPosicion(0, 1);
                break;
            case Direccion.Izquierda:
                this.actualizarPosicion(-1, 0);
                break;
            case Direccion.Derecha:
                this.actualizarPosicion(1, 0);
                break;
        };
        console.log(`Fantasma ${this.color} se mueve hacia ${Direccion[direccion]}.`);
        this.imprimirPosicion();
    };
};

// Ejemplo de uso
const pacman = new PacMan(3, 1);
const fantasmaUno = new Fantasma(10, 5, 'rojo');
const fantasmaDos = new Fantasma(8, 7, 'azul');

pacman.moverse(Direccion.Derecha);
pacman.realizarAccion();

fantasmaUno.moverse(Direccion.Izquierda);
fantasmaUno.cambiarModo();
fantasmaDos.moverse(Direccion.Arriba);
fantasmaDos.realizarAccion();