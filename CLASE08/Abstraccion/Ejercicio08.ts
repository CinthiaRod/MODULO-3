// Ejercicio 8: Sistema de Gestión de Cursos
// Crea un sistema que gestione cursos, profesores y estudiantes. 
// Usa una clase abstracta Persona, 
export abstract class Persona {
    constructor(public nombre: string, public edad: number) {
    };
};

// clases concretas Estudiante y Profesor, 
class Estudiante extends Persona {
    constructor(nombre: string, edad: number, public matricula: number) {
        super(nombre, edad);
        console.log(`\nDatos del estudiante:`);
        console.log(`Nombre: ${this.nombre} -- Edad: ${this.edad}  -- Matricula: ${this.matricula}.`);
    };
};
// y una clase Curso que contenga los estudiantes y el profesor.
class Profesor extends Persona {
    constructor(nombre: string, edad: number, public Materia: string) {
        super(nombre, edad);
        console.log(`El profesor ${this.nombre} tiene ${this.edad} años, imparte la materia de ${this.Materia}.`);
    };
};

class Curso {
    private estudiantes: Estudiante[] = [];
    constructor(public nombre: string, public profesor: Profesor) {
        console.log(`\n-----El nombre del curso actual es "${this.nombre}".-----`);
    };

    agregarEstudiante(estudiante: Estudiante): void {
        this.estudiantes.push(estudiante);
    };
};



//Ejemplo de uso
const profesor = new Profesor ("Jayden", 40, "Artes")
const estudiante = new Estudiante("Alonso", 32, 1208)
const estudianteDos = new Estudiante ("Cinthia", 28, 1203)
const curso = new Curso ("Arte y canto", profesor)
curso.agregarEstudiante(estudiante);
curso.agregarEstudiante(estudianteDos);
