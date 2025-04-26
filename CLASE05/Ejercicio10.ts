// Ejercicio 10: Registro de Estudiantes
// 1.Crea un sistema para registrar Estudiantes con las siguientes clases:
// Estudiante: Clase que incluye propiedades como nombre, edad y curso, además de un método que muestre la información del estudiante.
class Estudiante {
    public nombre: string;
    public edad: number;
    public curso: string;
    constructor(nombre: string, edad: number, curso: string) {
      this.nombre = nombre;
      this.edad = edad;
      this.curso = curso;
    };
    public mostrarInformacion(): void {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad}`);
      console.log(`Curso: ${this.curso}`);
    };
  };

// RegistroEstudiantes: Clase que maneje una lista de estudiantes, con métodos para agregar un estudiante y mostrar todos los estudiantes registrados.
class RegistroEstudiantes {
  private listaEstudiantes: Estudiante[] = [];
  public agregarEstudiante(estudiante: Estudiante): void {
    this.listaEstudiantes.push(estudiante);
    console.log(`${estudiante.nombre} ha sido registrado.`);
  };
  public mostrarTodosLosEstudiantes(): void {
    if (this.listaEstudiantes.length === 0) {
      console.log("No hay estudiantes registrados.");
      return;
    };
    console.log("\n--- Lista de Estudiantes Registrados ---");
    this.listaEstudiantes.forEach((estudiante, index) => {
      console.log(`Estudiante #${index + 1}:`);
      estudiante.mostrarInformacion();
      console.log("---");
    });
  };
};