function exibirDadosPais (infoPais) {
    console.log(infoPais)
    document.getElementById("country-flag").src = infoPais.flags.png
    document.getElementById("country-name").textContent = infoPais.name.common
    document.getElementById('country-capital').textContent = infoPais.capital[0]
}

async function obterPais (pais){
    const url = `https://restcountries.com/v3.1/name/${pais}`;
    const response = await fetch(url)
    const data = await response.json()
    return data [0]
}

async function buscarSugestoes(palavra) {
    const url = `https://restcountries.com/v3.1/name/${palavra}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.map(pais => pais.name.common);
    } catch (erro) {
      return [];
    }
  }
  
  const input = document.getElementById("country-input");
  const suggestionsEl = document.getElementById("suggestions");
  
  input.addEventListener("input", async () => {
    const termo = input.value.trim();
    if (termo.length < 2) {
      suggestionsEl.innerHTML = "";
      return;
    }
  
    const sugestoes = await buscarSugestoes(termo);
    suggestionsEl.innerHTML = "";
  
    sugestoes.forEach(nome => {
      const li = document.createElement("li");
      li.textContent = nome;
      li.addEventListener("click", async () => {
        input.value = nome;
        suggestionsEl.innerHTML = "";
        const infoPais = await obterPais(nome);
        exibirDadosPais(infoPais);
      });
      suggestionsEl.appendChild(li);
    });
  });
  
  input.addEventListener("keydown", async (evento) => {
    if (evento.key === "Enter") {
      const infoPais = await obterPais(evento.target.value);
      exibirDadosPais(infoPais);
      suggestionsEl.innerHTML = "";
    }
  });