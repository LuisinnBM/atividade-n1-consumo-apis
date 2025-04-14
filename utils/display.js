function showCountryInfo(data) {
  console.log(`\n🌍 País Escolhido: ${data.name.common}`);
  console.log(`📍 Capital: ${data.capital[0]}`);
  console.log(`🙋‍♂️ População: ${data.population.toLocaleString()}`);
  console.log(`🌐 Idioma: ${Object.values(data.languages).join(', ')}`);
  console.log(`🪙 Moeda: ${Object.values(data.currencies).map(c => c.name).join(', ')}`);
}

function showBooks(books) {
  console.log(`\n📖 Livros do País Escolhido:`);
  if (books.length === 0) {
    console.log('❌ Nenhum livro encontrado para esse país.');
    return;
  }
  books.forEach((book, index) => {
    console.log(`\n${index + 1}. 📘 Título: ${book.volumeInfo.title}`);
    console.log(`   ✍️ Autor(es): ${book.volumeInfo.authors?.join(', ')}`);
    console.log(`   📝 Descrição: ${book.volumeInfo.description?.slice(0, 150)}`);
  });
}

module.exports = { showCountryInfo, showBooks };
