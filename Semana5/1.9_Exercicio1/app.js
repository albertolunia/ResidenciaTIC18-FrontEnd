// Inicializa o mapa
let map = L.map('map').setView([51.505, -0.09], 2);
let data; // Variável para armazenar os dados dos países

// Configura a camada OSM (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// Busca a lista de países na API restcountries.com
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countriesData => {
    data = countriesData; // Atribui os dados recebidos à variável 'data'
    const selectElement = document.getElementById('paises');
    data.forEach(country => {
      const optionElement = document.createElement('option');
      optionElement.value = country.name.common;
      optionElement.textContent = country.name.common;
      selectElement.appendChild(optionElement);
    });
  })
  .catch(error => {
    console.error('Erro:', error);
  });

// Função para lidar com o evento de mudança no elemento select
function changeMapCountry() {
  const selectElement = document.getElementById('paises');
  const selectedCountry = selectElement.value;
  const countryData = data.find(country => country.name.common === selectedCountry);
  if (countryData) {
    const latLong = [countryData.latlng[0], countryData.latlng[1]];
    map.setView(latLong, 8);
  }
}

// Adiciona um ouvinte de eventos ao elemento select
const selectElement = document.getElementById('paises');
selectElement.addEventListener('change', changeMapCountry);

let latLong = [-14.794851092521004, -39.25978803993592];
map.setView(latLong, 8);