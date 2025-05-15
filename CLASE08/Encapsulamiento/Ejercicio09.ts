// 9. Ejercicio de Playlist
// Diseña una clase Playlist que contenga propiedades privadas para nombre y canciones
// (un array de títulos de canciones). 
class Playlist {
    private nombre: string;
    private canciones: string[] = [];

    constructor(nombre: string) {
        this.nombre = nombre;
    };

// Implementa métodos para agregar canciones, eliminar canciones y listar todas las canciones en la playlist.
// Asegúrate de que se imprima un mensaje si se intenta agregar una canción vacía o eliminar una canción que no existe.
agregarCancion(titulo: string): void {
    if (!titulo.trim()) {
        console.log("El título de la canción no puede estar vacío.");
        return;
    };

    if (this.canciones.includes(titulo)) {
        console.log(`La canción '${titulo}' ya existe en la playlist '${this.nombre}'.`);
        return;
    };

    this.canciones.push(titulo);
    console.log(`Se agregó la canción '${titulo}' a la playlist '${this.nombre}'.`);
};

eliminarCancion(titulo: string): void {
    const index = this.canciones.indexOf(titulo);
    if (index > -1) {
        this.canciones.splice(index, 1);
        console.log(`Se eliminó la canción '${titulo}' del playlist '${this.nombre}'.`);
    } else {
        console.log(`La canción '${titulo}' no se encontró en la playlist '${this.nombre}'.`);
    };
};

listarCanciones(): void {
    if (this.canciones.length === 0) {
        console.log(`La playlist '${this.nombre}' está vacía.`);
        return;
    };

    console.log(`\n--- Canciones del playlist '${this.nombre}' ---`);
    this.canciones.forEach((cancion, index) => {
        console.log(`${index + 1}. ${cancion}`);
        });
    };
};

// Ejemplo de uso
const miPlaylist = new Playlist("ROCK ME");

miPlaylist.agregarCancion("Highway to hell");
miPlaylist.agregarCancion("Welcome to the jungle");
miPlaylist.agregarCancion(""); // Canción vacia
miPlaylist.agregarCancion("Highway to hell"); // Canción duplicada

miPlaylist.listarCanciones();

miPlaylist.eliminarCancion("Hotel California"); // Eliminar una canción inexistente
miPlaylist.eliminarCancion("Welcome to the jungle");

miPlaylist.listarCanciones();