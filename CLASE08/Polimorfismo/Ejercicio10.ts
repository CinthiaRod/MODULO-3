// Ejercicio 10: Polimorfismo y Sobreescritura Compleja con Interacción entre Clases
// Crea una clase Cliente que pueda asociarse a una CuentaBancaria.
class CuentaBancaria {
    private saldo: number;

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial;
    };
    depositar(cantidad: number): void {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Se depositaron $${cantidad}.`);
        } else {
            console.log("La cantidad a depositar debe ser mayor que cero.");
        };
    };
    
    retirar(cantidad: number): boolean {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            console.log(`Se retiraron $${cantidad}. Saldo actual: $${this.saldo}`);
            return true;
        } else if (cantidad <= 0) {
            console.log("La cantidad a retirar debe ser mayor que cero.");
        } else {
            console.log("Saldo insuficiente.");
        };
        return false;
    };
    
    obtenerSaldo(): number {
        return this.saldo;
    };
    };
    
    class Cliente {
    public nombre: string;
    public cuenta: CuentaBancaria;
    
    constructor(nombre: string, cuenta: CuentaBancaria) {
        this.nombre = nombre;
        this.cuenta = cuenta;
    };
    
    asociarCuenta(cuenta: CuentaBancaria): void {
        this.cuenta = cuenta;
        console.log(`${this.nombre} ha asociado la cuenta bancaria.`);
    };
    
    realizarDeposito(cantidad: number): void {
        if (this.cuenta) {
            this.cuenta.depositar(cantidad);
        } else {
            console.log(`${this.nombre} no tiene una cuenta bancaria asociada.`);
        };
    };
    
    realizarRetiro(cantidad: number): void {
        if (this.cuenta) {
            this.cuenta.retirar(cantidad);
        } else {
            console.log(`${this.nombre} no tiene una cuenta bancaria asociada.`);
        };
    };
    
    consultarSaldo(): void {
        if (this.cuenta) {
            console.log(`Saldo de ${this.nombre}: $${this.cuenta.obtenerSaldo().toFixed(2)}`);
        } else {
            console.log(`${this.nombre} no tiene una cuenta bancaria asociada.`);
        };
    };
};
    
// Crea diferentes tipos de clientes, como ClienteVIP que tiene beneficios adicionales. 
// Cada tipo de cliente puede realizar depósitos y retiros, pero los clientes VIP pueden retirar sin comisiones.
class ClienteVIP extends Cliente {
    constructor(nombre: string, cuenta: CuentaBancaria) {
    super(nombre, cuenta);
    };

    retiroSinComision(cantidad: number): void {
        if (this.cuenta) {
            if (cantidad > 0 && cantidad <= this.cuenta.obtenerSaldo()) {
                this.cuenta.retirar(cantidad);
                console.log(`${this.nombre} (VIP) retiró $${cantidad} sin comisiones. Saldo actual: $${this.cuenta.obtenerSaldo().toFixed(2)}`);
            } else if (cantidad <= 0) {
                console.log("La cantidad a retirar debe ser mayor que cero.");
            } else {
                console.log("Saldo insuficiente.");
            };
        } else {
            console.log(`${this.nombre} (VIP) no tiene una cuenta bancaria asociada.`);
        };
    };

    realizarRetiro(cantidad: number): void {
        this.retiroSinComision(cantidad);
    };
};

// Ejemplo de uso
const cuentaRegular = new CuentaBancaria(520);
const clienteRegular = new Cliente("Emma", cuentaRegular);

clienteRegular.realizarDeposito(500);
clienteRegular.realizarRetiro(100);
clienteRegular.consultarSaldo();

const cuentaVIP = new CuentaBancaria(120050);
const clienteVIP = new ClienteVIP("Alonso", cuentaVIP);

clienteVIP.realizarDeposito(3000);
clienteVIP.realizarRetiro(1500); 
clienteVIP.consultarSaldo();