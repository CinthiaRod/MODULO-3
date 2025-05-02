// 1. Ejercicio de Coche
// Diseña una clase Coche que represente un vehículo. 
// Esta clase debe tener propiedades privadas para marca, modelo, año, y kilometraje. 
export class Coche {
    private _marca: string;
    private _modelo: string;
    private _año: number;
    private _kilometraje: number;

    constructor(marca: string, modelo: string, año: number) {

// Asegúrate de que el año no sea menor que 1886 (el año en que se inventó el coche) y que el kilometraje no pueda ser negativo. 
        if (año < 1886) { 
            console.log('El año del coche no puede ser anterior a 1886');
            this._año = 1886; 
        } else {
            this._año = año;
        };
        this._marca = marca;
        this._modelo = modelo;
        this._kilometraje = 0; 
        console.log(`Marca: ${this._marca} --  Modelo: ${this._modelo} --  Kilometraje: ${this.kilometraje}`);
        
    };

// Implementa métodos para encender el coche y realizar un viaje, que incrementen el kilometraje. 
public encender(): void {
    console.log(`El coche ${this._marca} se ha encendido`);
};

public realizarViaje(km: number): void {
// Si se intenta establecer un año o kilometraje no válido, imprime un mensaje indicando el error.
    if (km < 0) {
        console.log("El kilometraje ingresado no es válido"); 
    } else {
        this._kilometraje += km;
        console.log(`El kilometraje total recorrido después del viaje es: ${this._kilometraje} km`);
    };
};

public get kilometraje(): number {
    return this._kilometraje;
    };
};

//Ejemplo de uso
const cocheUno = new Coche('Jeep', 'Liberty', 2002);
cocheUno.encender();
cocheUno.realizarViaje(42);
