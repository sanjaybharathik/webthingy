
fetch('restaurants.xml')
.then(response => response.text())
.then(xmlString => {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, 'text/xml');

  const restaurants = xmlDoc.getElementsByTagName('restaurant');

  const restaurantContainer = document.getElementById('RestaurantContainers');
  for (let i = 0; i < restaurants.length; i++) {
    const restaurant = restaurants[i];
    const name = restaurant.getElementsByTagName('name')[0].textContent;
    const location = restaurant.getElementsByTagName('location')[0].textContent;

    const restaurantEntry = document.createElement('div');
    restaurantEntry.classList.add('cards');
    restaurantEntry.innerHTML = `<strong class="cardtext">${name}</strong><br><b class="cardtext">${location}</b>`;
    restaurantContainer.appendChild(restaurantEntry);
  }
})
.catch(error => console.error(error));
