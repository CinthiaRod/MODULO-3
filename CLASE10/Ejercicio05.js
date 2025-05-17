// Ejercicio 5: Promesas Anidadas - Flujo Completo de Registro y Bienvenida
// Consigna:
// Crea una secuencia de promesas que simulen el flujo de un usuario que se registra en una plataforma y 
// luego recibe un mensaje de bienvenida. La secuencia debe ser:
// 1.Registrar Usuario (promesa que tarda 2 segundos).
// 2.Enviar Email de Bienvenida (promesa que tarda 1 segundo).
// 3.Mostrar Mensaje Final al completar ambas tareas.
// Si alguna de las promesas falla, debe imprimirse un mensaje de error.
function registrarUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("¡Usuario registrado!");
            resolve();
        }, 2000);
    });
};

function enviarEmailBienvenida() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("¡Email de bienvenida enviado!");
            resolve();
        }, 1000);
    });
};

registrarUsuario()
    .then(() => enviarEmail())
    .then(() => console.log("¡Proceso concluido con éxito!"))
    .catch(() => console.error("¡Advertencia: Error en el proceso!"));