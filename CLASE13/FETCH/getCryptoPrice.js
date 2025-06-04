// Ejercicio 10: Obtener Precio de Criptomoneda
// 1.Crea un archivo getCryptoPrice.js.
// 2.Escribe una función que reciba el símbolo de una criptomoneda (como "BTC" para Bitcoin) y realice una solicitud a la API de CoinGecko para obtener el precio actual.
// 3.Muestra en la consola el nombre de la criptomoneda y su precio en dólares.
// Pistas:
// •La URL para obtener el precio es https://api.coingecko.com/api/v3/simple/price?ids={crypto_id}&vs_currencies=usd.
// •Usa el id de la criptomoneda en minúsculas (por ejemplo, bitcoin para BTC).async function getCryptoPrice(cryptoId) {
  // Construye la URL de la API de CoinGecko para obtener el precio simple en USD.
  // Se utiliza un template literal para insertar dinámicamente el cryptoId.

  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoId}&vs_currencies=usd`);
    if (!response.ok) {
      throw new Error(`Error! ${response.status}`);
    }
    const data = await response.json();

    if (!data[cryptoId]) {
      console.error(`Error: La criptomoneda con ID "${cryptoId}" no fue encontrada.`);
      return null;
    }
    const price = data[cryptoId].usd;
    return { 
      name: cryptoId,
      price: price
    }

  } catch (error) {
    console.error("Error al obtener el precio de la criptomoneda:", error);
    return null; 
  }
