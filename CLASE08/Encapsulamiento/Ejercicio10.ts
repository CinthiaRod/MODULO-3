// 10. Ejercicio de Taller de Reparaciones
// Diseña una clase Taller que tenga propiedades privadas para nombre, direccion, servicios 
// (un array de objetos con nombreServicio, precio, y descripcion), 
// y calificaciones (un array para almacenar las calificaciones de los clientes). 
interface Servicio {
    nombreServicio: string;
    precio: number;
    descripcion: string; 
};

class Taller {
    private nombre: string;
    private direccion: string;
    private servicios: Servicio[] = [];
    private calificaciones: number[] = [];

    constructor(nombre: string, direccion: string) {
        this.nombre = nombre;
        this.direccion = direccion;
    };

// Implementa métodos para agregar servicios, eliminar servicios, listar los servicios disponibles, 
// agregar calificaciones y calcular el promedio de calificaciones. 
// Si se intenta agregar un servicio con un precio negativo, imprime un mensaje informativo. 
agregarServicio(nombreServicio: string, precio: number, descripcion: string = ""): void {
    if (precio < 0) {
        console.log("El precio del servicio no puede ser menor a 0.");
        return;
    };

    const servicioExistente = this.servicios.find(servicio => servicio.nombreServicio === nombreServicio);
    if (servicioExistente) {
        console.log(`El servicio '${nombreServicio}' ya existe en el taller.`);
        return;
    };

    this.servicios.push({ nombreServicio, precio, descripcion });
    console.log(`Se agregó el servicio '${nombreServicio}' al taller.`);
};

eliminarServicio(nombreServicio: string): void {
    const serviciosDisponibles = this.servicios.length;
    this.servicios = this.servicios.filter(servicio => servicio.nombreServicio !== nombreServicio);
    if (this.servicios.length < serviciosDisponibles) {
        console.log(`Se eliminó el servicio '${nombreServicio}' del taller.`);
    } else {
        console.log(`El servicio '${nombreServicio}' no se encontró en el taller.`);
    };
};

listarServicios(): void {
    if (this.servicios.length === 0) {
        console.log(`El taller '${this.nombre}' no tiene servicios disponibles actualmente.`);
        return;
    };

    console.log(`\n--- Servicios disponibles en '${this.nombre}' ---`);
    this.servicios.forEach(servicio => {
        console.log(`- Servicio: ${servicio.nombreServicio} ---- Precio: $${servicio.precio.toFixed(2)}`);
        if (servicio.descripcion) {
            console.log(`Descripción: ${servicio.descripcion}`);
        };
    });
};
// También imprime un mensaje si se intenta agregar una calificación que no está entre 1 y 5.
agregarCalificacion(calificacion: number): void {
    if (calificacion >= 1 && calificacion <= 5) {
        this.calificaciones.push(calificacion);
        console.log(`Se agregó la calificación: ${calificacion}`);
    } else {
        console.log("La calificación debe estar entre 1 y 5.");
    };
};

calcularPromedioCalificaciones(): number {
    if (this.calificaciones.length === 0) {
        return 0;
    };
    return this.calificaciones.reduce((sum, calificacion) => sum + calificacion, 0) / this.calificaciones.length;
};

mostrarInformacion(): void {
    console.log(`--- Información del Taller '${this.nombre}' ---`);
    console.log(`Dirección: ${this.direccion}`);
    this.listarServicios();
    const promedio = this.calcularPromedioCalificaciones();
    if (promedio > 0) {
        console.log(`Promedio de calificaciones: ${promedio.toFixed(2)}`);
    } else {
        console.log("Aún no hay calificaciones para este taller.");
    };
};
};

// Ejemplo de uso
const miTaller = new Taller("Taller RB", "Reforma #800, Ensenada");

miTaller.agregarServicio("Cambio de Aceite", 500, "Incluye filtro y revisión de niveles, aceite nuevo.");
miTaller.agregarServicio("Alineación y Balanceo", 800, "Incluye el servicio en las 4 ruedas");
miTaller.agregarServicio("Cambio de Aceite", 1000, "Servicio completo de aceite"); // Agregar un servicio existente
miTaller.agregarServicio("Lavado de moto", -10, "Limpieza profunda"); // Agregar un servicio con precio negativo

miTaller.listarServicios();

miTaller.eliminarServicio("Alineación y Balanceo");
miTaller.eliminarServicio("Pulido de Faros"); // Eliminar un servicio inexistente

miTaller.agregarCalificacion(4);
miTaller.agregarCalificacion(5);
miTaller.agregarCalificacion(3);

miTaller.mostrarInformacion();
