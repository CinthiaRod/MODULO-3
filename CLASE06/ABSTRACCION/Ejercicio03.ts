// Ejercicio 3: Interfaces - Sistema de Gestión de Usuarios
// Crea una interfaz Usuario que tenga las propiedades: nombre (obligatoria), edad (opcional), readonly id (solo lectura).
interface Usuario {
    nombre: string;
    edad?: number;  
    readonly id: number; 
  };

// Implementa esta interfaz en una clase UsuarioConcreto. 
class UsuarioConcreto implements Usuario {
    constructor(public nombre: string, public id: number, public edad?: number) {}
  };

// Luego, intenta modificar la propiedad id para mostrar cómo se aplican las restricciones de solo lectura.
const usuario = new UsuarioConcreto("Cinthia", 3, 28);
  console.log(`Los datos de usuario son:`);
  console.log(`ID: ${usuario.id}`);
  console.log(`Nombre: ${usuario.nombre}`);
  console.log(`Edad:${usuario.edad}`);

  usuario.id = 1; //Intentamos cambiar el id

  