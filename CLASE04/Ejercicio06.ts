// Actividad 6: Filtrar elementos de un arreglo genérico usando For...Of y Aserciones
// Crea una función genérica llamada filtrarElementos que reciba un arreglo de valores mixtos (por ejemplo, number | string | boolean). 
// Utiliza aserciones de tipo para acceder a las propiedades específicas de string.

function filtrarElementos<T>(arreglo: T[]): string[] {
    const cadenas: string[] = [];

// Usando un bucle for...of, filtra solo los valores que sean cadenas de texto (string). 
    for (const elemento of arreglo) {
      if (typeof elemento === 'string') {  //Condición para que sea extrictamente a string
        const cadena = elemento as string;
        cadenas.push(cadena);
        console.log(`Cadena encontrada: ${cadena}`);
      };
    };
    return cadenas;
  };

  //Declaramos una arreglo con valores mixtos
  const valoresMixtos: (number | string | boolean)[] = [
    12,
    "Hola mundo",
    true,
    "Me encanta Back",
    false,
    "TypeScript",
    3
  ];
//   //Aplicamos el filtro sobre el arreglo de valores mixtos
const resultadoFiltro = filtrarElementos(valoresMixtos);
  
