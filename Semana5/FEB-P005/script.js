// Função para buscar e exibir informações sobre um país
async function fetchAndDisplayCountryInfo(url, elementId) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();

    const countryElement = document.getElementById(elementId);

    if (data.length > 0) {
      const countryData = data[0]; // Supondo que a API retorna um array com um único país
      const countryInfo = `Nome: ${countryData.name.common}, Capital: ${countryData.capital || 'Não especificada'}, População: ${countryData.population || 'Não especificada'}`;
      countryElement.textContent = countryInfo;
    } else {
      countryElement.textContent = 'Informações sobre o país não encontradas';
    }
  } catch (error) {
    console.error('Erro durante a requisição:', error);
    throw error;
  }
}

// Exemplo de uso para preencher um elemento HTML com informações sobre o Brasil
fetchAndDisplayCountryInfo('https://restcountries.com/v3.1/name/Brazil', 'quadro-noticias')
  .catch(error => {
    console.error('Erro durante a requisição:', error);
  });