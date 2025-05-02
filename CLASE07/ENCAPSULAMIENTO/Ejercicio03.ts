// 3. Ejercicio de Estudiante
// Diseña una clase Estudiante que contenga propiedades privadas para nombre, edad, y calificaciones. 
class Estudiante {
    private _nombre: string;
    private _edad: number;
    private _calificaciones: number[];

    constructor(nombre: string, edad: number) {
        this._nombre = nombre;
        this._edad = edad >= 0 ? edad : 0; 
        this._calificaciones = []
        console.log("Datos del estudiante:");
        console.log(`Nombre: ${this._nombre} --  Edad: ${this._edad}`);
    };

// Implementa métodos para agregar calificaciones y calcular el promedio. 
public agregarCalificacion(calificacion: number): void {
    // Imprime un mensaje en caso de que se intente agregar una calificación inválida (fuera del rango 0-100)
    // o si no hay calificaciones para calcular el promedio.
    if (calificacion < 0 || calificacion > 100) {
        console.log("La calificación debe ser entre 0 y 100.");
    } else {
        this._calificaciones.push(calificacion);
    };
};
public calcularPromedio(): number {
    if (this._calificaciones.length === 0) { //En caso de que no hayan calificaciones se arrojará el siguiente mensaje y resultado
        console.log("No se puede obtener el promedio, el estudiante no cuenta con calificaciones registradas.");
        return 0;
    };
    const sumaCalificaciones = this._calificaciones.reduce((a, b) => a + b, 0);
    return sumaCalificaciones / this._calificaciones.length;
    };
};

//Ejemplo de uso
export const estudiante = new Estudiante('Jayden', 5);
estudiante.agregarCalificacion(85);
estudiante.agregarCalificacion(90);
estudiante.agregarCalificacion(99)
estudiante.agregarCalificacion (100)
estudiante.agregarCalificacion(80)
console.log(`El promedio de calificaciones del estudiante es: ${estudiante.calcularPromedio()}`);

