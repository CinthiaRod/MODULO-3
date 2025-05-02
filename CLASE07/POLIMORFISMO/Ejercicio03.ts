// Ejercicio 3: Encapsulamiento con Métodos Privados
// Crea una clase Banco con un saldo inicial privado. 
class Banco {
    private saldo: number;
  
    constructor(saldoInicial: number) {
      this.saldo = saldoInicial >= 0 ? saldoInicial : 0;
      if (saldoInicial < 0) {
        console.log("El saldo inicial no puede ser negativo.");
      };
    };

    // El saldo solo puede ser modificado a través de un método depositar y otro retirar, 
    // los cuales deben validar que la cantidad no sea negativa. 
    public depositar(cantidad: number): void {
        if (cantidad > 0) {
          this.saldo += cantidad;
          console.log(`Depósito de $${cantidad} realizado.`);
        } else {
          console.error("La cantidad a depositar debe ser positiva.");
        };
    };
    public retirar(cantidad: number): void {
        if (cantidad > 0) {
          if (cantidad <= this.saldo) {
            this.saldo -= cantidad;
            console.log(`Retiro de $${cantidad} realizado.`);
         } else {
            console.error("Saldo insuficiente para realizar el retiro.");
          };
        } else {
          console.error("La cantidad a retirar incorrecta, ingresa un monto positivo.");
        };
    };

// Implementa métodos públicos para consultar el saldo.
    public consultarSaldo(): number {
        return this.saldo;
    };
};


//Ejemplo de uso
const banco = new Banco(50);
console.log(`Saldo inicial: $${banco.consultarSaldo()}`);
banco.depositar(360);
banco.retirar(260)
banco.depositar(100)
console.log(`Saldo actual: $${banco.consultarSaldo()}`);
