// 8. Ejercicio de Empleado
// Crea una clase Empleado que contenga propiedades privadas para nombre, salario, y departamento.
class Empleado {
    private nombre: string;
    private salario: number;
    private departamento: string;

    constructor(nombre: string, salario: number, departamento: string) {
        this.nombre = nombre;
        this.salario = salario;
        this.departamento = departamento;
    };

// Implementa métodos para cambiar el salario (que no puede ser menor a 0) y obtener la información del empleado.
// Si se intenta establecer un salario negativo, imprime un mensaje indicativo.
cambiarSalario(nuevoSalario: number): void {
    if (nuevoSalario < 0) {
        console.log("El salario no puede ser un valor menor a 0.");
        return;
    };
    this.salario = nuevoSalario;
    console.log(`El salario de ${this.nombre} ha sido actualizado a $${this.salario}.`);
};

obtenerInformacion(): { nombre: string; salario: number; departamento: string } {
    return {
        nombre: this.nombre,
        salario: this.salario,
        departamento: this.departamento
    };
};

mostrarInformacion(): void {
    const info = this.obtenerInformacion();
    console.log(`Nombre: ${info.nombre} -- Salario: $${info.salario}`);
    console.log(`Departamento: ${info.departamento}`);
};
};

// Ejemplo de uso
const empleado1 = new Empleado("Cinthia Rodriguez", 30000, "Administración");
const empleado2 = new Empleado("Felipe Samaniego", 43000, "TI");

empleado1.mostrarInformacion();
empleado2.mostrarInformacion();

empleado1.cambiarSalario(30850);
empleado1.mostrarInformacion();

empleado2.cambiarSalario(-100); // Salario negativo
empleado2.cambiarSalario(45500);
empleado2.mostrarInformacion();

