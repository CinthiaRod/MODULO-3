// 3. Ejecución de Múltiples Consultas en Paralelo
// Simulemos un caso donde un sistema necesita realizar varias consultas a distintos servicios externos de manera simultánea. 
// Escribe tres funciones que simulen una consulta, cada una con un tiempo de respuesta diferente (1, 2 y 3 segundos). 
// Luego, crea una función que ejecute estas tres consultas en paralelo
// usando Promise.all, de modo que se esperen los tres resultados antes de continuar.
function consulta(nombreServicio, tiempoRespuesta) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`${nombreServicio} respondió en ${tiempoRespuesta} segundos`);
    }, tiempoRespuesta * 1000);
  });
};

async function consultaUno() {
  return await consulta("Servicio de Peinado", 1);
};

async function consultaDos() {
  return await consulta("Servicio de maquillaje ", 2);
};

async function consultaTres() {
  return await consulta("Servicio de masaje", 3);
};

async function ejecutarConsultasParalelo() {
  try {
    const resultados = await Promise.all([
      consultaUno(),
      consultaDos(),
      consultaTres()
    ]);
    console.log("¡Consultas completadas!");
    resultados.forEach(resultado => console.log(resultado));
  } catch (error) {
    console.error("Error en alguna de las consultas:", error);
  };
};

ejecutarConsultasParalelo();