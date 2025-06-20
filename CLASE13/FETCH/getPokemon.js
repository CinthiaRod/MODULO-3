// Ejercicio 2: Obtener Información de un Pokémon Específico
// Descripción:
// 1.Crea un archivo getPokemon.js.
// 2.Usando fetch, realiza una solicitud a la API de PokeAPI para obtener información sobre el Pokémon "Bulbasaur".
// 3.Extrae el nombre y los tipos de Bulbasaur y muestra estos datos en la consola.
// Pistas:
// •La URL para Bulbasaur es https://pokeapi.co/api/v2/pokemon/1.
// •Los tipos de Pokémon se encuentran en types dentro de la respuesta.

fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => response.json()) 
    .then(data => {
        const name = data.name;
        const types = data.types.map(typeInfo => typeInfo.type.name);

        console.log(`Nombre: ${name}`);
        console.log(`Tipos: ${types.join(', ')}`);
    })
    .catch(error => {
        console.error('Error al obtener la información:', error);
    });