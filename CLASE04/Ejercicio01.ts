// Actividad 1: Usar For...In para recorrer propiedades de un objeto
// Crea un objeto con al menos 3 propiedades (nombre, edad, ciudad) y usa un bucle for...in para recorrer
let persona = {
    nombre: "Cinthia",
    edad: 28,
    ciudad: "Ensenada"
};
// y mostrar cada propiedad y su valor.
for (let propiedad in persona) {
    console.log(`Propiedad: ${propiedad} --> Valor: ${persona[propiedad as keyof typeof persona]}`);
}
