// Ejercicio 8: Lista de Episodios de una Serie
// 1.Crea un archivo getEpisodes.js.
// 2.Realiza una solicitud a la API de TVMaze para obtener la lista de episodios de una serie específica (puedes usar el nombre “Friends” como ejemplo).
// 3.Muestra en la consola los nombres de los episodios y sus números de temporada.
// Pistas:
// •La URL para obtener episodios es https://api.tvmaze.com/singlesearch/shows?q=nombre_de_la_serie&embed=episodes.
// •Los episodios están dentro de _embedded.episodes.
async function getSeriesEpisodes(seriesName) {
  const encodedSeriesName = encodeURIComponent(seriesName);
  console.log(`Buscando episodios de la serie: "${seriesName}"...`);

  try {
    const response = await fetch(`https://api.tvmaze.com/singlesearch/shows?q=${encodedSeriesName}&embed=episodes`);
    if (!response.ok) {
      if (response.status === 404) {
        console.error(`Error: La serie "${seriesName}" no fue encontrada.`);
        return; 
      }
      throw new Error(`¡Error! ${response.status}`);
    }

    const data = await response.json();
    const episodes = data._embedded.episodes;
    if (!episodes || episodes.length === 0) {
      console.log(`No se encontraron episodios de "${seriesName}".`);
      return;
    }

    console.log(`\n--- Episodios de "${seriesName}" ---`);
    episodes.forEach(episode => {
      console.log(`Temporada ${episode.season} - Episodio ${episode.number}: ${episode.name}`);
    });

  } catch (error) {
    console.error("Error al obtener la información de los episodios:", error);
  }
}
