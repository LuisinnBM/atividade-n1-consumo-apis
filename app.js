const { getCountryInfo } = require('./services/countryService');
const { getBooksByCountry } = require('./services/bookService');
const { showCountryInfo, showBooks } = require('./utils/display');

const country = 'France';

async function main() {
  try {
    const countryData = await getCountryInfo(country);
    showCountryInfo(countryData);

    const books = await getBooksByCountry(countryData.name.common);
    showBooks(books);

  } catch (error) {
    console.error("Ocorreu o seguinte erro:", error.message);
  }
}

main();