// 4. Ejercicio de Aviones
// Crea una clase Avion con propiedades privadas para el modelo, capacidad y velocidad.
export class Avion {
    private _modelo: string;
    private _capacidad!: number; 
    private _velocidad!: number; 

    constructor(modelo: string, capacidad: number, velocidad: number) {
        this._modelo = modelo;
        this.capacidad = capacidad; 
        this.velocidad = velocidad; 
    };

// Implementa getters y setters para cada propiedad,
public get modelo(): string {
    return `El modelo del avión es: ${this._modelo}` 
};
public get capacidad(): number {
        return this._capacidad; 
    };
public set capacidad(value: number) {
// asegurándote de validar que la capacidad no sea menor que 0 y que la velocidad no sea negativa.
    if (value < 0) throw new Error("Capacidad incorrecta."); 
    this._capacidad = value;
    };
    public get velocidad(): number {
        return this._velocidad; 
    };
    public set velocidad(value: number) {
        if (value < 0) throw new Error("Velocidad incorrecta."); 
        this._velocidad = value; 
    };
};

//Ejemplo de uso
const avion = new Avion('Airbus A350', 350, 15000);
console.log(avion.modelo);     
console.log("Capacidad:", avion.capacidad, "pasajeros.");
console.log("Velocidad:", avion.velocidad, "km."); 

