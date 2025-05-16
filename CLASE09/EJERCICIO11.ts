// Ejercicio 11: Sistema de Reservas en una Peluquería con Herencia y Polimorfismo 
// Crea un sistema de reservas para una peluquería. 
// Define una clase Servicio con atributos comunes como nombre, duracion, y precio. 
abstract class Servicio {
     public nombre: string;
     public duracion: number;
     public precio: number;
    
    constructor(nombre: string, duracion: number, precio: number) {
        this.nombre = nombre;
        this.duracion = duracion;
        this.precio = precio;
    };
    abstract mostrarDetalles(): void;
};

// Luego, crea clases concretas para diferentes servicios como CorteDeCabello y Manicura. 
class CorteDeCabello extends Servicio {
    constructor() {
        super("Corte de Cabello para caballero", 45, 150); 
    };

    mostrarDetalles(): void {
        console.log(`${this.nombre} - Duración: ${this.duracion} min, Precio: $${this.precio} pesos.`);
    };
};

class Manicura extends Servicio {
    constructor() {
        super("Manicura", 60, 300); 
    };

    mostrarDetalles(): void {
        console.log(`${this.nombre} - Duración: ${this.duracion} min, Precio: $${this.precio} pesos.`);
    };
};

// Implementa una clase Cliente y una clase Reserva que asocie clientes con servicios. 
// Usa polimorfismo para permitir la reserva de cualquier tipo de servicio y encapsulamiento para gestionar la disponibilidad de horarios.
export class Cliente {
    public nombre: string;
    public telefono: string;
    
    constructor(nombre: string, telefono: string) {
        this.nombre = nombre;
        this.telefono = telefono;
    };
    
    mostrarInfo(): void {
        console.log(`Cliente: ${this.nombre}, Teléfono de contacto: ${this.telefono}`);
    };
};
    
class Reserva {
    private citasDeServicio: Servicio[] = [];
    private horario: string;
    
    constructor(public cliente: Cliente, horario: string) {
        this.horario = horario;
    };
   
    agregarServicio(servicio: Servicio): void {
        this.citasDeServicio.push(servicio);
        console.log(`Servicio ${servicio.nombre} agregado a la reserva de ${this.cliente.nombre}.`);
    };
    
    mostrarDetallesReserva(): void {
        console.log(`Reserva para ${this.cliente.nombre} a las ${this.horario}:`);
        this.citasDeServicio.forEach(servicio => servicio.mostrarDetalles());
    };
};

    // Ejemplo de uso
    const cliente = new Cliente("Cinthia", "111-6665");
    const reserva = new Reserva(cliente, "16:00 PM");
    
    const corte = new CorteDeCabello();
    const manicura = new Manicura();
    
    reserva.agregarServicio(corte); 
    reserva.agregarServicio(manicura);  
    
    reserva.mostrarDetallesReserva();