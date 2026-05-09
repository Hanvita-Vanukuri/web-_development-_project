const infoBox = document.getElementById('infoBox');

const populations = {
  Asia: '4.7 Billion',
  Europe: '750 Million',
  Africa: '1.4 Billion',
  America: '1 Billion',
  Australia: '43 Million'
};

const map = document.getElementById('worldMap');

map.addEventListener('click', () => {
  const regions = Object.keys(populations);
  const randomRegion = regions[Math.floor(Math.random() * regions.length)];

  infoBox.innerHTML = `
    <h2>${randomRegion}</h2>
    <p>Population: ${populations[randomRegion]}</p>
  `;
});