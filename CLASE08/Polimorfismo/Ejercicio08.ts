// Ejercicio 8: Polimorfismo y Herencia con Abstracción Compleja
// Implementa una clase abstracta Empleado con un método abstracto calcularSalario. 
abstract class Empleado {
    constructor(public nombre: string) {}

    abstract calcularSalario(): number;
};

// Crea dos clases derivadas EmpleadoPorHora y EmpleadoFijo, que calculen el salario de acuerdo a las horas trabajadas
//  y salario fijo respectivamente.
class EmpleadoPorHora extends Empleado {
    constructor(nombre: string, public tarifaPorHora: number, public horasTrabajadas: number) {
        super(nombre);
    };

    calcularSalario(): number {
        return this.tarifaPorHora * this.horasTrabajadas;
    };
};

class EmpleadoFijo extends Empleado {
    constructor(nombre: string, public salarioFijo: number) {
        super(nombre);
    };

    calcularSalario(): number {
        return this.salarioFijo;
    };
};

// Ejemplo de uso
const empleadoPorHora = new EmpleadoPorHora("Cinthia", 85, 40);
const empleadoFijo = new EmpleadoFijo("Rafael", 5000);

console.log(`${empleadoPorHora.nombre} - Salario: $${empleadoPorHora.calcularSalario()}`);
console.log(`${empleadoFijo.nombre} - Salario: $${empleadoFijo.calcularSalario()}`);