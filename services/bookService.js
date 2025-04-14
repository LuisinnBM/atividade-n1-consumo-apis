const axios = require('axios');

async function getBooksByCountry(query) {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}+inauthor&maxResults=5`);
    return response.data.items || [];
  } catch (error) {
    throw new Error(`Erro ao buscar livros: ${error.message}`);
  }
}

module.exports = { getBooksByCountry };