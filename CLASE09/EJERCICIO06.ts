// Ejercicio 6: Encapsulamiento en clases
// Crea una clase CuentaBancaria que tenga atributos privados como saldo y un método público para consultar el saldo
// y otro para depositar dinero.
class CuentaBancaria {
    private saldo: number;
    private propietario: string;
    
    constructor(propietario: string, saldoInicial: number = 0) {
        this.propietario = propietario;
        this.saldo = saldoInicial;
    };
    
     consultarSaldo(): number {
        return this.saldo;
    };
    
    obtenerPropietario(): string {
        return this.propietario;
    };
    
    depositar(monto: number): void {
         if (monto > 0) {
            this.saldo += monto;
            console.log(`Depósito de $${monto} realizado en la cuenta de ${this.propietario}.`);
        } else {
            console.error("El monto a depositar debe ser mayor que cero.");
        };
    };
};

// Ejemplo de uso
const miCuenta = new CuentaBancaria("Emma López", 1000);
console.log(`Saldo inicial de la cuenta de ${miCuenta.obtenerPropietario()}: $${miCuenta.consultarSaldo()}`);
miCuenta.depositar(500);
console.log(`Saldo actual de la cuenta de ${miCuenta.obtenerPropietario()}: $${miCuenta.consultarSaldo()}`);
miCuenta.depositar(-100);