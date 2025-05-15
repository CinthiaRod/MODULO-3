// Ejercicio 9: Encapsulamiento y Herencia con Protección de Datos
// Crea una clase CuentaBancaria con métodos para depositar y retirar dinero, pero protege el saldo para 
// que solo pueda ser modificado dentro de la clase. 
class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    };

    depositar(cantidad: number): void {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Se depositaron $${cantidad}. Saldo actual: $${this.saldo}`);
        } else {
            console.log("La cantidad a depositar debe ser mayor que cero.");
        };
    };

    retirar(cantidad: number): void {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            console.log(`Se retiraron $${cantidad}. Saldo actual: $${this.saldo}`);
        } else if (cantidad <= 0) {
            console.log("La cantidad a retirar debe ser mayor que cero.");
        } else {
            console.log("Saldo insuficiente.");
        };
    };

    obtenerSaldo(): number {
        return this.saldo;
    };
};

// Crea una subclase CuentaAhorros que agregue interés al saldo.
class CuentaAhorros extends CuentaBancaria {
    constructor(saldoInicial: number, private tasaInteresAnual: number) {
        super(saldoInicial);
    };

    agregarInteres(): void {
        const interes = this.obtenerSaldo() * (this.tasaInteresAnual / 100);
        this.depositar(interes); 
        console.log(`Se agregaron $${interes.toFixed(2)} de interés. Saldo actual: $${this.obtenerSaldo().toFixed(2)}`);
    };
};

// Ejemplo de uso
const miCuenta = new CuentaBancaria(100000);
miCuenta.depositar(5000);
miCuenta.retirar(10000);

console.log(`\nSaldo final de la cuenta bancaria: $${miCuenta.obtenerSaldo()}`);

console.log("\n--- Cuenta de Ahorros ---");
const miCuentaDeAhorros = new CuentaAhorros(2000, 4);
miCuentaDeAhorros.depositar(1000);
miCuentaDeAhorros.retirar(300);
miCuentaDeAhorros.agregarInteres();

console.log(`Saldo final de la cuenta de ahorros: $${miCuentaDeAhorros.obtenerSaldo()}`);
