// Ejercicio 4: Obtener Información de un País por Nombre
// 1.Crea un archivo getCountry.js.
// 2.Escribe una función que reciba el nombre de un país como parámetro, realice una solicitud a la API de REST Countries, 
// y devuelva el nombre, capital y región del país.
// 3.Muestra estos datos en la consola.
// Pistas:
// •La URL para buscar un país es https://restcountries.com/v3.1/name/{name}.
// •La respuesta contiene un arreglo; accede al primer objeto con [0] para extraer la información.
async function getCountryInfo(countryName) {
  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
    if (!response.ok) {
      if (response.status === 404) {
        console.error(`Error: El país "${countryName}" no fue encontrado.`);
        return null; 
      }
      throw new Error(`¡Error HTTP! Estado: ${response.status}`);
    }

    const data = await response.json();
    const country = data[0];

    const countryData = {
      name: country.name.common, 
      capital: country.capital ? country.capital[0] : 'N/A',
      region: country.region, 
    };

    return countryData; 
  } catch (error) {
    console.error("Error al obtener la información del país:", error);
    return null; 
  }
}

