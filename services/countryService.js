const axios = require('axios');

async function getCountryInfo(country) {
  try {
    const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
    return response.data[0];
  } catch (error) {
    throw new Error(`Erro ao buscar dados do país: ${error.message}`);
  }
}

module.exports = { getCountryInfo };