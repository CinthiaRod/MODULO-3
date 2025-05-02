// 5. Ejercicio de Vacaciones
//Desarrolla una clase Vacacion que tenga propiedades privadas para destino, duracion (en días) y presupuesto.
class Vacacion {
    private _destino: string;
    private _duracion!: number;
    private _presupuesto!: number;

    constructor(destino: string, duracion: number, presupuesto: number) {
        this._destino = destino;
        this.duracion = duracion;
        this.presupuesto = presupuesto;
    };

//Implementa getters y setters, 
public get destino(): string {
    return `El destino es: ${this._destino}`;
};

public get duracion(): number {
    return this._duracion;
};
public set duracion(value: number) {
//asegurándote de que duracion no sea menor que 1 y presupuesto sea mayor que 0.
    if (value < 1) throw new Error("La duración debe ser desde 1 día."); 
    this._duracion = value;
};

public get presupuesto(): number {
    return this._presupuesto;
};

public set presupuesto(value: number) {
    if (value <= 0) throw new Error("El presupuesto debe ser mayor que 0"); 
    this._presupuesto = value;
    };
};


//Ejemplo de uso
const vacacionPrimerDestino = new Vacacion('Heroica Mulegé', 14, 30000);
console.log(vacacionPrimerDestino.destino);
console.log("Duración de las vacaciones:",vacacionPrimerDestino.duracion, "días.");
console.log("El presupuesto del viaje es:", vacacionPrimerDestino.presupuesto, "pesos.");
